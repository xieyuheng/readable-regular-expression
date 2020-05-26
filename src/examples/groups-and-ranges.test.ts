import assert from "assert"
import rr from "../main"
import * as ut from "../ut"

// NOTE
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

{
  const alice_excerpt = "The Caterpillar and Alice looked at each other"

  const without_e = rr.add_flag(
    rr.seq(rr.boundary, rr.one_or_more(/[a-df-z]/), rr.boundary),
    rr.flags.global + rr.flags.ignoreCase
  )

  assert(ut.equal(alice_excerpt.match(without_e), ["and", "at"]))
}

{
  const image_description = "This image has a resolution of 1440×900 pixels."

  const digit = rr.group(rr.one_or_more(rr.digit))
  const size = rr.seq(digit, "×", digit)

  const results = size.exec(image_description)

  assert(results && results[1] === "1440")
  assert(results && results[2] === "900")
}

{
  // NOTE Counting vowels

  const alice_excerpt =
    "There was a long silence after this, and Alice could only hear whispers now and then."

  const vowels = rr.add_flag(/[aeiouy]/, rr.flags.global)

  const results = alice_excerpt.match(vowels)

  assert(results && results.length === 25)
}

{
  // NOTE Using groups

  const persons =
    "first_name: John, last_name: Doe\n" +
    "first_name: Jane, last_name: Smith\n"

  const names = rr.add_flag(
    rr.seq(
      "first_name: ",
      rr.group(rr.one_or_more(rr.word)),
      ", ",
      "last_name: ",
      rr.group(rr.one_or_more(rr.word))
    ),
    rr.flags.global + rr.flags.multiline
  )

  let results = null

  console.log("// IMPRESSION Using groups")

  do {
    results = names.exec(persons)
    console.log(results && `Hello ${results[1]} ${results[2]}`)
  } while (results)
}

{
  // NOTE Using named groups

  const persons =
    "first_name: John, last_name: Doe\n" +
    "first_name: Jane, last_name: Smith\n"

  const names = rr.add_flag(
    rr.seq(
      "first_name: ",
      rr.named_group("first_name", rr.one_or_more(rr.word)),
      ", ",
      "last_name: ",
      rr.named_group("last_name", rr.one_or_more(rr.word))
    ),
    rr.flags.global + rr.flags.multiline
  )

  let results = null

  console.log("// IMPRESSION Using named groups")

  do {
    results = names.exec(persons)
    console.log(
      results &&
        results.groups &&
        `Hello ${results.groups.first_name} ${results.groups.last_name}`
    )
  } while (results)
}
