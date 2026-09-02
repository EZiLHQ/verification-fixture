import { describe, expect, it } from "bun:test";
import { grossPayLabel, grossPayMinor } from "../src/pricing";

describe("grossPayMinor", () => {
  it("multiplies rate by days and rounds to whole paise", () => {
    expect(grossPayMinor(250_000, 2)).toBe(500_000);
    expect(grossPayMinor(333_333, 1.5)).toBe(500_000);
  });
  it("never goes below zero", () => {
    expect(grossPayMinor(-1, 3)).toBe(0);
    expect(grossPayMinor(100, -3)).toBe(0);
  });
});

describe("grossPayLabel", () => {
  it("renders paise as hundredths of a rupee", () => {
    // 5,00,000 paise is ₹5000.00. This test fails until the divisor is fixed.
    expect(grossPayLabel(250_000, 2)).toBe("₹5000.00");
  });
});
