import { MAX_INPUT_LENGTH } from "./constants.ts";

export function validate(value: string) {
  if (value.length > MAX_INPUT_LENGTH) {
    return value.slice(0, value.length - 1);
  }

  if (value.startsWith('0,')) {
    return value;
  }

  if (value.startsWith('0')) {
    return value.length === 1 ? value : value.slice(1);
  }

  return value;
}
