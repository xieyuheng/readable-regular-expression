# Style Guide

**In general, observe the style of existing code and respect it.**

## Naming convention

- Use `snake_case` naming convention for method name and variable name.
- Use `PascalCase` naming convention for class name.
- Do **NOT** use `camelCase`.

## Use `abstract class` only to define algebraic data type

Do **NOT** use `abstract class`, <br>
when you are not defining algebraic data type.

For example, we can use concrete `class`:
``` typescript
export class Lexer {
  constructor(
    public lex(text: string): Array<Token>
  ) {}
}
```

instead of `abstract class`:

``` typescript
export abstract class Lexer {
  abstract lex(text: string): Array<Token>
}
```

## Add `abstract_class_name` for abstract class

Add `abstract_class_name` to each abstract class, to mimic nominal typing.
- To help typescript's type checker to check more.

Examples:

``` typescript
abstract class Bird {
  abstract_class_name: "Bird" = "Bird"
}

class Duck extends Bird {}
class Cuckoo extends Bird {}
class Ostrich extends Bird {}

abstract class Fish {
  abstract_class_name: "Fish" = "Fish"
}

class Tuna extends Fish {}
class Carp extends Fish {}

function bird_fly(bird: Bird): void {
  console.log(`bird: ${bird.constructor.name} fly`)
}

bird_fly(new Ostrich())
// bird_fly(new Carp())
// ERROR:
// Argument of type 'Carp' is not assignable to parameter of type 'Bird'.
//   Types of property 'abstract_class_name' are incompatible.
//     Type '"Fish"' is not assignable to type '"Bird"'.
```
