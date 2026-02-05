const x: bigint = 123n;

const y: bigint = BigInt(123);

const z: bigint = x + y;

console.log(z);

const a: bigint = 123n;

const b: bigint = BigInt(123);

const c: bigint = a + b;

console.log(c);


let d = null;
let f = undefined;

// let g: number = d;

const e = { foo: 1 };

let g: string | number = e.foo;

let h: string & number

// 另外，typeof命令的参数不能是类型。

// type i = typeof (1+2);
type i = typeof e.foo;

// 类型继承了父类型的所有特征，所以可以用在父类型的场合。
// 但是，子类型还可能有一些父类型没有的特征，所以父类型不能用在子类型的场合。