export function capture(reg: RegExp): RegExp {
  return new RegExp(`(${reg.source})`)
}

export function capture_by(name: string, reg: RegExp): RegExp {
  return new RegExp(`(?<${name}>${reg.source})`)
}
