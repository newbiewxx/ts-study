/**
 * noImplicitAny 配置说明
 * 
 * noImplicitAny: true 的作用：
 * - 禁止在 TypeScript 无法推断类型时，隐式使用 any
 * - 但它不会禁止 TypeScript 明确推断出的 any 类型
 */

// ========== 情况 1：空数组 [] ==========
// ❌ 这不会报错！因为 TypeScript 明确推断为 any[]
const arr2 = [];
arr2.push(1);
arr2.push('2');  // 不会报错，因为 arr2 的类型是 any[]

// 为什么？因为 TypeScript 看到空数组，明确推断为 any[]
// 这不是"隐式 any"，而是"显式推断的 any[]"

// ========== 情况 2：函数参数没有类型 ==========
// ✅ 这会报错！因为无法推断参数类型，隐式推断为 any
function sum(a, b) {  // ❌ 错误：Parameter 'a' implicitly has an 'any' type.
  return a + b;
}

// ========== 情况 3：变量声明时无法推断 ==========
// ✅ 这会报错！因为无法推断类型，隐式推断为 any
let value;  // ❌ 错误：Variable 'value' implicitly has an 'any' type.
value = 123;

// ========== 解决方案 ==========

// 1. 空数组应该显式指定类型
const arr3: number[] = [];  // ✅ 正确
arr3.push(1);
// arr3.push('2');  // ❌ 错误：Argument of type 'string' is not assignable to parameter of type 'number'.

// 2. 或者使用类型推断（通过初始值）
const arr4 = [1, 2, 3];  // ✅ 推断为 number[]
// arr4.push('4');  // ❌ 错误

// 3. 函数参数必须显式类型注解
function sum2(a: number, b: number) {  // ✅ 正确
  return a + b;
}

// 4. 变量必须初始化或显式类型
let value2: number;  // ✅ 正确
value2 = 123;

// ========== 总结 ==========
/**
 * noImplicitAny: true 禁止的是：
 * 1. 函数参数没有类型注解 → 隐式 any
 * 2. 变量声明时无法推断类型 → 隐式 any
 * 
 * noImplicitAny: true 不禁止的是：
 * 1. 空数组 [] → 明确推断为 any[]（这是显式推断，不是隐式）
 * 2. 显式声明的 any 类型 → const x: any = ...
 * 
 * 如果要避免空数组推断为 any[]，应该：
 * - 显式指定类型：const arr: number[] = []
 * - 或者使用初始值让 TypeScript 推断：const arr = [1, 2]
 */
