import is from "../is/is";

export default function isObject<T>(value: T) {
  return is(value) === "Object"
}