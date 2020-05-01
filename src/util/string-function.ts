export function string_find_index(str: string, p: (x: string) => boolean): number {
  let index = 0
  while (index < str.length) {
    let x = str[index]
    if (p(x)) {
      return index
    } else {
      index += 1
    }
  }
  return -1
}

export function decorate_line_number(text: string): string {
  let lines = text.split("\n")
  let max = lines.length + 1
  let width = max.toString().length
  let decorated = ""
  lines.forEach((line, i) => {
    let line_number = i // NOTE index from 0 instead of 1
    let line_number_string = line_number.toString()
    line_number_string =
      " ".repeat(width - line_number_string.length) +
      line_number_string
    decorated += " "
    decorated += line_number_string
    decorated += " |"
    decorated += line
    decorated += "\n"
  })
  return decorated
}
