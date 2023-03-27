import is from "../is/is";

export default function isString<T>(value: T) {
  return is(value) === "String"
}