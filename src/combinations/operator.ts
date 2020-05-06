import { escape } from "../escape"

function maybe_string(re: RegExp | string): RegExp {
  if (typeof re === "string") return new RegExp(escape(re))
  else return re
}

export function seq(...res: Array<RegExp | string>): RegExp {
  return new RegExp(
    res
      .map(maybe_string)
      .map((re) => re.source)
      .join("")
  )
}

export function and(...res: Array<RegExp | string>): RegExp {
  return new RegExp(
    "(" +
      res
        .map(maybe_string)
        .map((re) => re.source)
        .join("") +
      ")"
  )
}

export function or(...res: Array<RegExp | string>): RegExp {
  return new RegExp(
    "(" +
      res
        .map(maybe_string)
        .map((re) => re.source)
        .join("|") +
      ")"
  )
}
