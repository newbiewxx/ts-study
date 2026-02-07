function hello(text: string) {
  console.log('hello,' + text);
}

interface MyFun {
  (a: string, b: number): number
}

const fn: MyFun = (a, b) => b;

const a = ['1', 2] as const

// a[0] = '2';

type ABC = { a:number; b:number; c:number };

function sum({ a, b, c }:ABC) {
  console.log(a + b + c);
}

sum({
  a: 1,
  b: 2,
  c: 3
})

// 注意，readonly关键字目前只允许用在数组和元组类型的参数前面，如果用在其他类型的参数前面，就会报错。

// 如果打开了strictNullChecks编译选项，那么 void 类型只允许返回undefined。
// 如果返回null，就会报错。这是因为 JavaScript 规定，如果函数没有返回值，就等同于返回undefined。

// 需要特别注意的是，如果变量、对象方法、函数参数是一个返回值为 void 类型的函数，
// 那么并不代表不能赋值为有返回值的函数。
// 恰恰相反，该变量、对象方法和函数参数可以接受返回任意值的函数，这时并不会报错。

// 注意，这种情况仅限于变量、对象方法和函数参数，函数字面量如果声明了返回值是 void 类型，还是不能有返回值。

// never是 TypeScript 的唯一一个底层类型，所有其他类型都包括了never。从集合论的角度看，number|never等同于number。
// 这也提示我们，函数的返回值无论是什么类型，都可能包含了抛出错误的情况。

type CreateElement = {
  (tag: 'a'): HTMLAnchorElement;
  (tag: 'canvas'): HTMLCanvasElement;
  (tag: 'table'): HTMLTableElement;
  (tag: string): HTMLElement;
};

// 实现：用类型断言 as CreateElement，因为实现只有一种返回类型（HTMLElement），
// 而重载要求不同参数对应不同返回值，TS 无法从单一体实现推导出满足所有重载
const createElement: CreateElement = ((tag: string) => {
  return document.createElement(tag);
}) as CreateElement;

// 使用示例（需在浏览器或带 DOM 的环境）
// const anchor = createElement('a');       // HTMLAnchorElement
// const canvas = createElement('canvas');  // HTMLCanvasElement
// const table = createElement('table');    // HTMLTableElement
// const div = createElement('div');       // HTMLElement
