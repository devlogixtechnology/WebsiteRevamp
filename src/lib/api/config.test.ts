import { afterEach, describe, expect, it, vi } from "vitest";

async function loadConfig() {
  vi.resetModules();
  return import("./config");
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("api config", () => {
  it("uses the same-origin mock API when NEXT_PUBLIC_API_URL is unset", async () => {
    vi.stubEnv("NEXT_PUBLIC_API_URL", undefined);
    const { API_BASE_URL, USING_MOCK_BACKEND } = await loadConfig();

    expect(API_BASE_URL).toBe("/api/v1");
    expect(USING_MOCK_BACKEND).toBe(true);
  });

  it("treats an empty or whitespace-only value as unset (Docker/.env pass blanks through)", async () => {
    vi.stubEnv("NEXT_PUBLIC_API_URL", "  ");
    const { API_BASE_URL, USING_MOCK_BACKEND } = await loadConfig();

    expect(API_BASE_URL).toBe("/api/v1");
    expect(USING_MOCK_BACKEND).toBe(true);
  });

  it("points at the real backend when configured, without a trailing slash", async () => {
    vi.stubEnv("NEXT_PUBLIC_API_URL", "https://api.devlogix.com/api/v1/");
    const { API_BASE_URL, USING_MOCK_BACKEND } = await loadConfig();

    expect(API_BASE_URL).toBe("https://api.devlogix.com/api/v1");
    expect(USING_MOCK_BACKEND).toBe(false);
  });
});
