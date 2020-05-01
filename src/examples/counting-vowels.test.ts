import rr from "../main"
import assert from "assert"

const alice_excerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then."

const reg = rr.create(rr.char_in("aeiouy"), rr.flag.global)

const vowels = alice_excerpt.match(reg)

if (vowels === null) {
  assert(false)
} else {
  assert(vowels.length === 25)
}
