# Readable regular expression

> 皇覽揆余初度兮 肇錫余以嘉名 <br>
> 名余曰正則兮 字余曰靈均 <br>
> -- 離騷 屈原

Regular expression + the way to do abstraction.

Make regular expression **Readable** again!

## Documents

### Quick start (in nodejs)

``` javascript
const rr = require("@xieyuheng/readable-regular-expression")

// NOTE Enter your phone number.
//   The expected format is like: `###-###-####`

const unreadable =
  /(\d{3}|\(\d{3}\))([-\/\.])\d{3}([-\/\.])\d{4}/;

const sep   = rr.group(/[-\/\.]/)
const three = rr.exactly(3, rr.digit)
const four  = rr.exactly(4, rr.digit)

const re =
  rr.seq(
    rr.or(three, rr.seq("(", three, ")")),
    sep, three, sep, four)

assert(re.source === expected.source)

const sentences = [
  "123-123-1234",
  "123-123-1234",
  "123.123.1234",
  "(123)-123-1234",
  "123/123/1234",
  "(123)/123.1234",
]

for (const sentence of sentences)
  console.table(re.exec(sentence))
```

## Development

``` bash
./dev install  # Install dependencies
./dev build    # Compile typescript to javascript
./dev t        # Run all tests
```

## Contributions

> Be polite, do not bring negative emotion to others.

- [TODO.md](TODO.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)
- [CODE-OF-CONDUCT.md](CODE-OF-CONDUCT.md)
- When contributing, add yourself to [AUTHORS](AUTHORS)

## License

- [GPLv3](LICENSE)
