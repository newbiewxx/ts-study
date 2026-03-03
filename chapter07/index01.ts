type User = {
  name: string;
  age: number;
}

type Age = User['age']

interface MyInterface {
  toString: () => string;
  prop: string;
}

const a: MyInterface = {
  prop: 'prop',
  toString: () => 'my interface'
}

// 注意，as const属于 TypeScript 的类型推断，如果变量明确地声明了类型，那么 TypeScript 会以声明的类型为准。

type MyType = {
  [n: number]: number;
}

const arr: MyType = [1, 2, 3]
// console.log(arr.length)

interface Point {
  x: number;
  y: number;
}

function computeDistance(point: Point) { /*...*/ }

// computeDistance({ x: 1, y: 2, z: 3 }); // 报错
computeDistance({ x: 1, y: 2, z: 3 } as Point);

const p  = { x: 1, y: 2, z: 3}
computeDistance(p); // 多给少收，并不报错

computeDistance({x: 1, y: 2}); // 正确