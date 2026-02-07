type MyArray<T> = T[];

let arr: MyArray<number> = [1, 2, 3]

const arr2 = [] // 此处是显式推断

arr2.push(1);
arr2.push('2')

const arr3: [...number[], boolean ,string] = [true, '2']
let arr4: [string, ...boolean[], number, bigint]