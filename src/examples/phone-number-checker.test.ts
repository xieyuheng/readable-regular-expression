import rr from "../main"
import assert from "assert"

// NOTE Enter your phone number.
//   The expected format is like: `###-###-####`

const sep = rr.group(/[-\/\.]/)
const three = rr.exactly(3, rr.digit)
const four = rr.exactly(4, rr.digit)

const re =
  rr.seq(
    rr.or(
      three,
      rr.seq(rr.escape("("), three, rr.escape(")"))),
    sep, three, sep, four)

const expected = /(\d{3}|\(\d{3}\))([-\/\.])\d{3}([-\/\.])\d{4}/;

assert(re.source === expected.source)
assert(re.exec("123-123-1234"))
assert(re.exec("123-123-1234"))
assert(re.exec("123.123.1234"))
assert(re.exec("(123)-123-1234"))
assert(re.exec("123/123/1234"))
assert(re.exec("(123)/123.1234"))
