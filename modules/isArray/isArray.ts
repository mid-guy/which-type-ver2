import is from "../is/is";

export default function isArray<T>(value: T) {
  return is(value) === "Array"
}