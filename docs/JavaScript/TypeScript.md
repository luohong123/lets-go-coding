---
{
    'title':TypeScript
}
---
# TypeScript

## 什么是TypeScript
`TypeScript` 是 `JavaScript` 的一个超集，是静态类型的语言,主要提供了类型系统和对 `ES6` 的支持，它由 `Microsoft` 开发，代码开源于 `GitHub` 上。
`Angular2+`就是基于`TypeScript`写的。
> `Flow` 也是静态类型的语言，它是`FaceBook`开源的，`Vue`中使用了`Flow`

## 静态类型的优势
### 增加代码的可读性和可维护性
- 通过类型定义可以很直观的知道如何使用，不需要反复使用`console.log`进行调试
- 在编译阶段就能发现问题, 而`JavaScript`是在代码编译之后，运行阶段才能发现问题。
- 增强了编辑器和 `IDE` 的功能，包括代码补全、接口提示、跳转到定义、重构。如果在`VSCode`中开发, 因为`VSCode`是基于`TypeScript`开发的，编辑器会提示错误
### 包容性
- `TypeScript` 是 `JavaScript` 的超集，旧项目用`TypeScript`重构,`.js` 文件可以直接重命名为 `.ts`,如果代码的类型定义报错，可以先使用`any`代替，使代码能编译通过
- 可以自动做出类型推论，如
```ts
// 完整的写法 a:string = '';
a = ''; // 可以自动推断出是字符类型
```
- 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
- 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取
- 可以定义从简单到复杂的几乎一切类型

### 社区活跃
- 大部分第三方库都有提供给 TypeScript 的类型定义文件
- Google 开发的 Angular2 就是使用 TypeScript 编写的
- TypeScript 拥抱了 ES6 规范，也支持部分 ESNext 草案的规范
### 提早发现代码中的 Bug
- 由于在编译阶段就能发现问题,可以提早发现代码中的`Bug`
```js
```

### 减少了复杂的错误处理逻辑
```js
// 这是动态类型，需要写这些逻辑
function sum(arr) {
  if (!arr) {
    throw new Error('函数需要传参')
  }
  if (!Array.isArray(arr)) {
    throw new Error('函数需要一个数组作为参数')
  }
  if (!arr.every(v => typeof v == 'number')) {
    throw new Error('函数需要数组为数字数组！')
  }
  let result = 0
  arr.forEach(v => {
    result += v
  })
  return result
}
sum([1, 2, 3])
```

### 便于代码重构
js代码重构时需要经常`console.log` 或者打断点才能知道如何传参，如:
```js
function test(user) {
  console.log(user.name)
}
test({ name: '青成' })
```
而`TypeScript` 有类型定义,可以很直观的阅读代码,如:
```ts
function test(user:string) {
}
test({ name: '青成' })
```
### 增强 IDE 的功能

- IDE: 集成开发环境
- `VSCode`开发
## 静态类型存在的问题
1. 会增加代码量
2. 需要花时间掌握类型
3. 可能会降低开发效率

## 快速上手
### 安装
- 通过npm（Node.js包管理器）
全局安装:
```bash
npm install -g typescript
```
- 安装Visual Studio的TypeScript插件
### 编译代码
把`.ts`文件编辑成`.js`, 如编辑`index.ts`
```bash
tsc index.ts
```
自动输出 `index.js`文件
## 手册指南

### 基础类型
基础类型包括数字，字符串，结构体，布尔值等。
#### 布尔值
```ts
let isFlag: boolean = false;
```
#### 数字
```ts
let a = 1; // 整数型
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
```

#### 字符串
```ts
let name: string = 'TypeScript';
name = '静态类型语言';
```
使用模版字符串
```ts
let name: string = 'TypeScript';
let introduce: string = `${name} 是一门静态类型语言`
```

#### 数组
```ts
let list: number[] = [1, 2, 3];
```
数组泛型, Array<元素类型>:
```ts
let list: Array<string> = ['a','b','c']; // 数组中的每一项为字符类型
```

#### 元组 Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为`string`和`number`类型的元组。
```ts
// 定义类型
let x: [string, number];
// 初始化值
x = ['hello', 10]; // 正确的使用
// 错误的使用,抛出错误,因为第一项为字符
x = [10, 'hello']; // Error: [ts] Type 'number' is not assignable to type 'string'.
```
当访问一个已知索引的元素，会得到正确的类型：
```ts
console.log(x[0].substr(1)); // ello
console.log(x[1].substr(1)); // Error: 'number' does not have 'substr'
```
当访问一个越界的元素，会使用联合类型替代，也就是新赋值的类型要符合定义的元组类型
```ts
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
```

#### 枚举
enum类型是对JavaScript标准数据类型的一个补充,枚举可以增加代码的可读性
```ts
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
```
默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
```ts
enum Color {
    Red = 1,
    Green,
    Blue
}
let c: Color = Color.Green;
```
全部都采用手动赋值:
```ts
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c: Color = Color.Green;
```
通过枚举的值得到它的名字，如:
```ts
enum Color {
    Red = 1,
    Gree
}
```
### 变量声明
### 接口
### 类
### 函数
### 泛型
### 枚举
### 类型推论
### 类型兼容性
### 高级类型
### Symbols
### 迭代器和生成器
### 模块
### 命名空间
### 命名空间和模块
### 模块解析
### 声明合并
### JSX
### 装饰器
### Mixins
### 三斜线指令
### JavaScript文件类型检查

## 进阶

## 常见问题

## 扩展