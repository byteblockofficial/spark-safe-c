const mockSend = jest.fn().mockResolvedValue({ id: "mock-id" });
jest.mock("resend", () => ({ Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })) }));

process.env.RESEND_API_KEY = "re_test_key";
process.env.CONTACT_EMAIL = "test@example.com";

import { NextRequest } from "next/server";
import { POST } from "../../app/api/contact/route";

function makeRequest(body: Record<string, unknown>, ip = "127.0.0.1"): NextRequest {
  return new NextRequest("http://localhost/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": ip }, body: JSON.stringify(body) });
}

const validBody = { name: "Dave Hunt", phone: "07700900005", message: "I need an emergency electrician." };

describe("POST /api/contact — validation", () => {
  test("returns 400 when name is missing", async () => { expect((await POST(makeRequest({ phone: "07700900005", message: "Hi" }))).status).toBe(400); });
  test("returns 400 when phone is missing", async () => { expect((await POST(makeRequest({ name: "Dave", message: "Hi" }))).status).toBe(400); });
  test("returns 400 when phone is invalid", async () => { expect((await POST(makeRequest({ name: "Dave", phone: "notaphone", message: "Hi" }))).status).toBe(400); });
  test("returns 400 when message is missing", async () => { expect((await POST(makeRequest({ name: "Dave", phone: "07700900005" }))).status).toBe(400); });
  test("returns 400 for invalid JSON", async () => {
    const req = new NextRequest("http://localhost/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "x-forwarded-for": "10.13.0.1" }, body: "not-json{{" });
    expect((await POST(req)).status).toBe(400);
  });
});

describe("POST /api/contact — success", () => {
  beforeEach(() => mockSend.mockClear());
  test("returns 200 with valid body", async () => { const res = await POST(makeRequest(validBody, "10.13.1.1")); expect(res.status).toBe(200); expect((await res.json()).ok).toBe(true); });
  test("email is optional", async () => { expect((await POST(makeRequest({ name: "Dave", phone: "07700900005", message: "Hi" }, "10.13.2.1"))).status).toBe(200); });
  test("sanitises HTML tags", async () => {
    await POST(makeRequest({ name: "<script>alert(1)</script>Dave", phone: "07700900005", message: "Hi" }, "10.13.3.1"));
    expect(mockSend.mock.calls[0][0].text).not.toContain("<script>");
  });
  test("from field is correct domain", async () => {
    await POST(makeRequest(validBody, "10.13.4.1"));
    expect(mockSend.mock.calls[0][0].from).toMatch(/spark-safe/);
  });
});

describe("POST /api/contact — rate limiting", () => {
  const ip = "192.168.130.130";
  test("allows first 5", async () => { for (let i = 0; i < 5; i++) expect((await POST(makeRequest(validBody, ip))).status).toBe(200); });
  test("blocks 6th with 429", async () => { expect((await POST(makeRequest(validBody, ip))).status).toBe(429); });
});

describe("POST /api/contact — error handling", () => {
  test("returns 500 without exposing Resend error", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockSend.mockRejectedValueOnce(new Error("Resend DO NOT EXPOSE"));
    const res = await POST(makeRequest(validBody, "172.16.13.1"));
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error).not.toMatch(/Resend/i);
    spy.mockRestore();
  });
});
