# Readable regular expression

> 皇覽揆余初度兮 肇錫余以嘉名 <br>
> 名余曰正則兮 字余曰靈均

Regular expression + the way to do abstraction.

Make regular expression **Readable** again!

## Documents

### Quick start (in nodejs)

``` javascript
const rr = require("@forchange/readable-regular-expression")

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

### More examples

- [src/examples](https://git.forchange.cn/cleword/explore/readable-regular-expression/-/tree/master/src/examples)

## Development

- Try:
  - `./dev install  # Install dependencies.`
  - `./dev build    # Compile typescript to javascript.`
  - `./dev t        # Run all tests.`
  - 谢宇恒 / Xie Yuheng
    - Developing environment:
      - OS: archlinux
      - node: v14.4.0
      - npm: 6.14.5

## Community

Contributions are welcome, see [current TODO list](TODO.md) for tasks. <br>
(Please add yourself to [the AUTHORS list](AUTHORS) if you made any contributions.)

- We enforce C4 as collaboration protocol.
  - [The C4 RFC](https://rfc.zeromq.org/spec:42/C4)
- [Style Guide](STYLE-GUIDE.md)
  - Observe the style of existing code and respect it.
- [Code of Conduct](CODE-OF-CONDUCT.md)

## License

- ForChange Inc. All rights reserved.
