export function seq(...res: Array<RegExp>): RegExp {
  return new RegExp(res.map(re => re.source).join(""))
}

export function and(...res: Array<RegExp>): RegExp {
  return new RegExp("(" + res.map(re => re.source).join("") + ")")
}

export function or(...res: Array<RegExp>): RegExp {
  return new RegExp("(" + res.map(re => re.source).join("|") + ")")
}
