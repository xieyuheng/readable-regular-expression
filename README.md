# Readable regular expression

Make regular expression **Readable** again!

## Documents

``` typescript
import rr from "@forchange/readable-regular-expression"

const sep   = rr.group(/[-\/\.]/)
const three = rr.exactly(3, rr.digit)
const four  = rr.exactly(4, rr.digit)

const re =
  rr.seq(
    rr.or(
      three,
      rr.seq(
        rr.escape("("),
        rr.group(three),
        rr.escape(")"))),
    sep, three, sep, four)

const non_readable =
  /(\d{3}|\(\d{3}\))([-\/\.])\d{3}([-\/\.])\d{4}/;
```

- More examples: [src/examples](https://git.forchange.cn/cleword/explore/readable-regular-expression/-/tree/master/src/examples)

## Development

- Try:
  - `./dev install  # Install dependencies.`
  - `./dev build    # Compile typescript to javascript.`
  - `./dev t        # Run all tests.`
- Maintainer:
  - 谢宇恒 / Xie Yuheng
    - Developing environment:
      - OS: archlinux
      - node: v13.13.0
      - yarn: 1.22.4

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
