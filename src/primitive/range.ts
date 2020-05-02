export function char_in(s: string): RegExp {
  return new RegExp(`[${s}]`)
}

export function char_not_in(s: string): RegExp {
  return new RegExp(`[^${s}]`)
}
