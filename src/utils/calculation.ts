export function calculate(value: number, rate: number) {
  if (value === 0) {
    return 0;
  }

  return Math.round(
    (value * rate) * 10000
  ) / 10000
}
