let x: any;

// any 类型表示没有任何限制，该类型的变量可以赋予任意类型的值。
x = 1;
x = 'hello'
x = false

// TypeScript 将这种类型称为“顶层类型”（top type），意为涵盖了所有下层。 

let a: any = 'hello'
let b: number

b = a // 类型污染

// 首先，unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
// 其次，不能直接调用unknown类型变量的方法和属性。
// “类型缩小”，即将一个不确定的类型缩小为更明确的类型。
// 在集合论上，unknown也可以视为所有其他类型（除了any）的全集，所以它和any一样，也属于 TypeScript 的顶层类型。

// 为什么never类型可以赋值给任意其他类型呢？这也跟集合论有关，空集是任何集合的子集。TypeScript 就相应规定，任何类型都包含了never类型。
// 因此，never类型是任何其他类型所共有的，TypeScript 把这种情况称为“底层类型”（bottom type）。

// 总之，TypeScript 有两个“顶层类型”（any和unknown），但是“底层类型”只有never唯一一个。
