export function validate(value: string) {
  if (value.startsWith('0,')) {
    return value;
  }

  if (value.startsWith('0')) {
    return value.length === 1 ? value : value.slice(1);
  }

  return value;
}
