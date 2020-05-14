import assert from "assert"
import rr from "../main"
import * as util from "../util"

// NOTE
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions

{
  // NOTE Lookahead assertion
  const re = rr.add_flag(rr.lookahead(/First/, / test/), rr.flags.global)
  assert(util.equal("First test".match(re), ["First"]))
  assert(util.equal("First peach".match(re), null))
  assert(util.equal("This is a First test in a year.".match(re), ["First"]))
  assert(util.equal("This is a First peach in a month.".match(re), null))
}

{
  // NOTE Basic negative lookahead assertion
  //   matches a number only if it is not followed by a decimal point.
  const re = rr.add_flag(
    rr.negative_lookahead(rr.one_or_more(rr.digit), /\./),
    rr.flags.global
  )
  assert(util.equal("3.141".match(re), ["141"]))
}

{
  // NOTE preserved identifiers
  const re = rr.add_flag(
    rr.seq(
      rr.negative_lookahead(rr.beginning, rr.or("type", "let", "case")),
      rr.word
    ),
    rr.flags.global
  )

  assert(util.equal("x".match(re), ["x"]))
  assert(util.equal("y".match(re), ["y"]))
  assert(util.equal("let".match(re), null))
  assert(util.equal("type".match(re), null))
  assert(util.equal("case".match(re), null))
}

{
  // NOTE Lookbehind assertion
  const oranges = ["ripe orange A ", "green orange B", "ripe orange C"]
  const re = rr.lookbehind("ripe ", "orange")
  const ripe_oranges = oranges.filter((fruit) => fruit.match(re))
  assert(util.equal(ripe_oranges, ["ripe orange A ", "ripe orange C"]))
}
