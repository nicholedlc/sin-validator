/**
 * Validates a string of digits using the Luhn algorithm.
 *
 * The Luhn algorithm is a checksum formula used to validate various identification numbers,
 * such as credit card numbers, IMEI numbers, and more.
 *
 * @param input The string of digits to be validated.
 * @returns `true` if the input passes the Luhn check (i.e., is a valid sequence according to the Luhn algorithm),
 *                      or `false` if it fails the check.
 *
 * @example
 * // Valid credit card number
 * const isValid = luhnCheck("4532015112830366");
 * console.log(isValid); // true
 *
 * @example
 * // Invalid credit card number
 * const isValid = luhnCheck("1234567812345678");
 * console.log(isValid); // false
 */
export function luhnCheck(input: string): boolean {
  if (!Number(input)) return false;

  const result = input
    .split("")
    .reverse()
    .reduce((acc: number, char: string, i: number): number => {
      const integer = Number(char);

      if (i % 2 === 0) return acc + integer;

      const doubled = integer * 2;
      if (doubled < 10) return acc + doubled;

      return acc + doubled - 9;
    }, 0);

  return result % 10 === 0;
}
