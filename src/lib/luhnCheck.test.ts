import { describe, it, expect } from "vitest";
import { luhnCheck } from "./luhnCheck";

describe("luhnCheck", () => {
  describe("input cannot be casted into a number", () => {
    it("returns false", () => {
      expect(luhnCheck("72e922540")).toBe(false);
    });
  });

  describe("input can be casted into a number", () => {
    it("returns true given a valid Luhn number", () => {
      // example with 8 digits
      expect(luhnCheck("12345674")).toBe(true);
      // examples with 9 digits
      expect(luhnCheck("421451741")).toBe(true);
      expect(luhnCheck("767811409")).toBe(true);
      expect(luhnCheck("571860907")).toBe(true);
      // example with 16 digits
      expect(luhnCheck("5034499891794177")).toBe(true);
    });

    it("returns false given an invalid Luhn number", () => {
      // example with 8 digits
      expect(luhnCheck("12345675")).toBe(false);
      // examples with 9 digits
      expect(luhnCheck("421451742")).toBe(false);
      expect(luhnCheck("767811400")).toBe(false);
      expect(luhnCheck("571860908")).toBe(false);
      // example with 16 digits
      expect(luhnCheck("5034499891794178")).toBe(false);
    });
  });
});
