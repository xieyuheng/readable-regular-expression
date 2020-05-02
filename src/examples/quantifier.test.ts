import assert from "assert"
import rr from "../main"
import * as util from "../util"

{
  const ghost_speak = "booh boooooooh"
  const spooky = rr.seq(/b/, rr.at_least(3, /o/), /h/)
  const re = rr.add_flag(spooky, rr.flags.global)
  assert(util.equal(ghost_speak.match(spooky), ["boooooooh"]))
}

{
  const modified_quote = "[He] ha[s] to go read this novel [Alice in Wonderland]."

  const re =
    rr.add_flag(
      rr.seq("[", rr.non_greedy(rr.zero_or_more(/./)), "]"),
      rr.flags.global)
  assert(
    util.equal(
      modified_quote.match(re),
      ["[He]", "[s]", "[Alice in Wonderland]"]))

  const re_greedy =
    rr.add_flag(
      rr.seq("[", rr.zero_or_more(/./), "]"),
      rr.flags.global)
  assert(
    util.equal(
      modified_quote.match(re_greedy),
      ["[He] ha[s] to go read this novel [Alice in Wonderland]"]))
}
