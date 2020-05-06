import * as util from "./index"

export function blank_p(blank: string): boolean {
  let result = true
  for (let i of util.range(0, blank.length)) {
    let char = blank[i]
    if (char !== " " && char !== "\t" && char !== "\n") {
      return false
    }
  }
  return result
}

export function empty_line_p(line: string): boolean {
  let result = true
  for (let i of util.range(0, line.length)) {
    let char = line[i]
    if (char !== " " && char !== "\t") {
      return false
    }
  }
  return result
}

export function ignore_line_p(line: string): boolean {
  return empty_line_p(line) || line.trimStart().startsWith("//")
}
