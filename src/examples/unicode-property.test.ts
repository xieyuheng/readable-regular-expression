import assert from "assert"
import rr from "../main"
import * as util from "../util"

const sentence = "A ticket to 大阪 costs ¥2000 👌."

{
  const emoji_presentation = /\p{Emoji_Presentation}/;
  const re = rr.add_flag(emoji_presentation, rr.flags.global + rr.flags.unicode)
  assert(util.equal(sentence.match(re), ["👌"]))
}

{
  const non_latin = rr.one_or_more(/\P{Script_Extensions=Latin}/)
  const re = rr.add_flag(non_latin, rr.flags.global + rr.flags.unicode)
  assert(util.equal(sentence.match(re), [" ", " ", " 大阪 ", " ¥2000 👌."]))
}

{
  const currency_or_punctuation = rr.or(/\p{Currency_Symbol}/, /\p{Punctuation}/)
  const re = rr.add_flag(currency_or_punctuation, rr.flags.global + rr.flags.unicode)
  assert(util.equal(sentence.match(re), ["¥", "."]))
}

{
  // NOTE General_Category

  // finding all the letters of a text
  let story = "It’s the Cheshire Cat: now I shall have somebody to talk to."
  // Most explicit form
  const letter = /\p{General_Category=Letter}/;
  const re = rr.add_flag(letter, rr.flags.global + rr.flags.unicode)
  assert(story.match(re))
  assert(re.exec(story))
}

{
  // NOTE Script

  const mixed = "aεЛ汉漢";
  assert(util.equal(mixed.match(/\p{Script=Latin}/gu), ["a"]))
  assert(util.equal(mixed.match(/\p{Script=Greek}/gu), ["ε"]))
  assert(util.equal(mixed.match(/\p{Script=Cyrillic}/gu), ["Л"]))
  assert(util.equal(mixed.match(/\p{Script=Han}/gu), ["汉", "漢"]))
}

{
  // NOTE Unicode property escapes vs. character classes

  const non_english_text = "Приключения Алисы в Стране чудес";

  // Trying to use ranges to avoid \w limitations:
  const re = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
  // BMP goes through U+0000 to U+FFFF but space is U+0020
  assert(
    util.equal(
      non_english_text.match(re),
      [ "Приключения", "Алисы", "в", "Стране", "чудес" ]))

  // Using Unicode property escapes instead
  const upe = /\p{Letter}+/gu;
  assert(
    util.equal(
      non_english_text.match(upe),
      [ "Приключения", "Алисы", "в", "Стране", "чудес" ]))
}
