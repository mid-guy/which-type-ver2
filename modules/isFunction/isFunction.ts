import is from "../is/is";

export default function isFunction<T>(value: T) {
  return is(value) === "Function"
}