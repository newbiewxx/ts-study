interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

type name = Person['firstname'];

interface Foo {
  readonly x: string;
}

const foo: Foo = {
  x: 'hello'
}

// foo.x = 'world';

// 如果一个 interface 同时定义了字符串索引和数值索引，那么数值索引必须服从于字符串索引。
// 因为在 JavaScript 中，数值属性名最终是自动转换成字符串属性名。

// interface A {
//   [prop: string]: number;
//   [prop: number]: string; // 报错
// }

interface B {
  [prop: string]: number;
  [prop: number]: number; // 正确
}

// 数值索引必须兼容字符串索引的类型声明。

// 对象的方法共有三种写法。
interface A {
  f(x: boolean): string;
}

interface C {
  f: (x: boolean) => string;
}

interface D {
  f: {
    (x: boolean): string;
    props: string;
  }
}

const fn = (x: boolean) => x.toString();
fn.props = 'props';

const d: D = {
  f: fn
}

// interface 可以定义函数
interface Add {
  (x: number, y: number): number;
}

const myAdd: Add = (x, y) => x + y;

interface ErrorConstructor {
  new (message?: string): Error;
}


const err: ErrorConstructor = Error;


// interface 继承 interface
// interface 继承 type  注意，如果type命令定义的类型不是对象，interface 就无法继承。
// interface 继承 class


// 接口合并

interface Document {
  a: string;
}

document.a = 'hello';

interface Circle {
  area: bigint;
}

interface Rectangle {
  area: number;
}

declare const s: Circle | Rectangle;
type S = typeof s.area;

declare const ss: string;
type SS = typeof ss;


// interface VS type

// 1.type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。
interface Arr {
  [n: number]: string;
}

interface Fn {
  (x: number): string;
}
// 2.interface可以继承其他类型，type不支持继承。
// 3.同名interface会自动合并，同名type则会报错。
// 4.interface不能包含属性映射（mapping），type可以
// 5.this关键字只能用于interface。
// 6.type 可以扩展原始数据类型，interface 不行。
// 7.interface无法表达某些复杂类型（比如交叉类型和联合类型），但是type可以。