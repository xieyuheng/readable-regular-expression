export function zero_or_more(reg: RegExp): RegExp {
  return new RegExp(reg.source + "*")
}

export function one_or_more(reg: RegExp): RegExp {
  return new RegExp(reg.source + "+")
}

export function zero_or_one(reg: RegExp): RegExp {
  return new RegExp(reg.source + "?")
}
