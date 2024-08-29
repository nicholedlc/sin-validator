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
