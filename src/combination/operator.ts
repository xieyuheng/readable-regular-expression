export function seq(...regs: Array<RegExp>): RegExp {
  return new RegExp(regs.map(reg => reg.source).join())
}
