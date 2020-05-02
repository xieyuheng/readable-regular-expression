import assert from "assert"
import rr from "../main"
import * as util from "../util"

// NOTE
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
{
  const chess_story = "He played the King in a8 and she moved her Queen in c2."
  const coordinates = rr.seq(rr.word, rr.digit)
  const re = rr.add_flag(coordinates, rr.flags.global)
  const expected = /\w\d/g;
  assert(re.source === expected.source)
  assert(util.equal(chess_story.match(re), ["a8", "c2"]))
}

{
  const moods = "happy 🙂, confused 😕, sad 😢"
  const emoticons = /[\u{1F600}-\u{1F64F}]/u;
  const re = rr.add_flag(emoticons, rr.flags.global)
  const expected = /[\u{1F600}-\u{1F64F}]/gu;
  assert(re.source === expected.source)
  assert(util.equal(moods.match(re), ["🙂", "😕", "😢"]))
}

{
  const alice_excerpt =
    "I’m sure I’m not Ada,’ she said, " +
    "‘for her hair goes in such long ringlets, " +
    "and mine doesn’t go in ringlets at all."
  const word_starts_with_a = rr.seq(rr.boundary, /[aA]/, rr.one_or_more(rr.word))
  const re = rr.add_flag(word_starts_with_a, rr.flags.global)
  const expected = /\b[aA]\w+/g;
  assert(re.source === expected.source)
  assert(util.equal(alice_excerpt.match(re), ["Ada", "and", "at", "all"]))
}

{
  const non_english_text = "Приключения Алисы в Стране чудес";
  const re = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
  // NOTE BMP goes through U+0000 to U+FFFF but space is U+0020
  assert(
    util.equal(
      non_english_text.match(re),
      [ "Приключения", "Алисы", "в", "Стране", "чудес" ]))
}
