const x = Symbol();

// 值类型
const y: unique symbol = Symbol();

let z: symbol = Symbol();

z = y;

const a = Symbol();
// symbol
let b = a;

let c = Symbol();
// symbol
const d = c;

interface Foo {
  [a]: string;
  [b]: number;
}

const e: Foo = {
  [a]: '111',
  [b]: 222
}