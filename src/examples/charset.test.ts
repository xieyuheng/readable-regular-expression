import assert from "assert"
import rr from "../main"
import * as util from "../util"

// NOTE
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
{
  const chess_story = "He played the King in a8 and she moved her Queen in c2."
  const coordinates = rr.seq(rr.word, rr.digit)
  const re = rr.add_flag(coordinates, rr.flags.global)
  assert(re.source === /\w\d/g.source)
  assert(util.equal(chess_story.match(re), ["a8", "c2"]))
}

{
  const moods = "happy 🙂, confused 😕, sad 😢"
  const emoticons = /[\u{1F600}-\u{1F64F}]/u;
  const re = rr.add_flag(emoticons, rr.flags.global)
  assert(re.source === /[\u{1F600}-\u{1F64F}]/gu.source)
  assert(util.equal(moods.match(re), ["🙂", "😕", "😢"]))
}
