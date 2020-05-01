export function create(reg: RegExp, flag: string): RegExp {
  return new RegExp(reg, flag)
}
