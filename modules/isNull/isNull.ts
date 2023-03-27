import is from "../is/is";

export default function isNull<T>(value: T) {
  return is(value) === "Null"
}