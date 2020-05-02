export function group(re: RegExp): RegExp {
  return new RegExp(`(${re.source})`)
}

export function non_capturing_group(re: RegExp): RegExp {
  return new RegExp(`(?:${re.source})`)
}

export function named_group(name: string, re: RegExp): RegExp {
  return new RegExp(`(?<${name}>${re.source})`)
}
