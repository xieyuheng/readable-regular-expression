import * as util from "./index"

export function blank_repr(blank: string): string {
  let s = ""
  for (let i of util.range(0, blank.length)) {
    let char = blank[i]
    if (char === " ") {
      s += "_"
    } else if (char === "\t") {
      s += "|"
    } else if (char === "\n") {
      s += "\\n"
    } else {
      throw new Error(
        "blank_repr fail\n" +
          "meet non blank char\n" +
          `char: ${char}\n` +
          `blank: ${blank}\n`
      )
    }
  }
  return s
}
