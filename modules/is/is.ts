export default function is<T>(value: T) {
  return Object.prototype.toString.call(value).slice(8, -1)
}