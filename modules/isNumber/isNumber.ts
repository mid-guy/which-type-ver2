import is from "../is/is";

export default function isNumber<T>(value: T) {
  return is(value) === "Number"
}