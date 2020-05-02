import rr from "../main"
import assert from "assert"

// NOTE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

const bs = rr.one_or_more(/b/)
const dbsd = rr.seq(/d/, rr.group(bs), /d/)
const re = rr.add_flag(dbsd, rr.flag.global)

assert(re.source === /d(b+)d/g.source)

const results = re.exec("cdbbdbsbz")

assert(results && results.index === 1)
