export function typeOf (obj) {
  return Object.prototype.toString.call(obj).replace(/^\[object\s(.*)\]$/, '$1').toLowerCase()
}