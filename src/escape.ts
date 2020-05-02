// NOTE code taken from:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

export function escape(str: string): RegExp {
  // NOTE $& means the whole matched string
  const escaped = str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
  return new RegExp(escaped)
}
