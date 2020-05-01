import assert from "assert"

// NOTE Left close, right open integer interval.
export function* range(lo: number, hi: number) {
  let i = lo
  while (i < hi) {
    yield i
    i += 1
  }
}

export function* ranges(array: Array<[number, number]>) {
  for (let [lo, hi] of array) {
    for (let i of range(lo, hi)) {
      yield i
    }
  }
}

export function repeats<T>(f: () => T, n: number): Array<T> {
  let array = new Array()
  for (let _ of range(0, n)) {
    array.push(f())
  }
  return array
}

export function map2obj<V>(
  map: Map<string, V>
): { [key: string]: V } {
  let obj: any = {}
  for (let [k, v] of map.entries()) {
    obj[k] = v
  }
  return obj
}

export function obj2map<V>(
  obj: { [key: string]: V }
): Map<string, V> {
  let map = new Map<string, V>()
  for (let k in obj) {
    map.set(k, obj[k])
  }
  return map
}

export function array2map<V>(array: Array<V>): Map<string, V> {
  let map = new Map()
  let len = array.length / 2
  assert(len = Math.floor(len))
  for (let i of range(0, len)) {
    map.set(array[i], array[i + 1])
  }
  return map
}

export function array2obj<V>(array: Array<V>): { [key: string]: V } {
  return map2obj(array2map(array))
}

export function map_eq<K, V>(
  x: Map<K, V>,
  y: Map<K, V>,
  eq: (v: V, w: V) => boolean,
): boolean {
  if (x.size !== y.size) { return false }
  for (let k of x.keys()) {
    let v = x.get(k)
    let w = y.get(k)
    if (v === undefined) {
      return false
    } else if (w === undefined) {
      return false
    } else if (!eq(v, w)) {
      return false
    }
  }
  return true
}

export function obj_eq<K, V>(
  x: { [key: string]: V },
  y: { [key: string]: V },
  eq: (v: V, w: V) => boolean,
): boolean {
  let keys = Object.keys(x)
  if (Object.keys(y).length !== keys.length) {
    return false
  }
  for (let k of keys) {
    if (!eq(x[k], y[k])) {
      return false
    }
  }
  return true
}

export function array_eq<V>(
  x: Array<V>,
  y: Array<V>,
  eq: (v: V, w: V) => boolean,
): boolean {
  if (x.length !== y.length) { return false }
  for (let i of range(0, x.length)) {
    let v = x[i]
    let w = y[i]
    if (!eq(v, w)) {
      return false
    }
  }
  return true
}
