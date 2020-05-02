export function create(reg: RegExp, flag: string): RegExp {
  return new RegExp(reg, flag)
}

export const flag = {
  global: "g",
  ignoreCase: "i",
  multiline: "m",
  dotAll: "s",
  unicode: "u",
  sticky: "y",
}
