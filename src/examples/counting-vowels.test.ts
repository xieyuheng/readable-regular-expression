import rr from "../main"
import assert from "assert"

const alice_excerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then."

const re = rr.add_flag(/[aeiouy]/, rr.flags.global)

const vowels = alice_excerpt.match(re)

assert(vowels && vowels.length === 25)
