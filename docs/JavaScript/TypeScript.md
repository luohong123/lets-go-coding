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
let colorName: string = Color[2];
console.log(colorName); // Green
```
#### Any
在编程阶段当不清楚类型的变量的类型时。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
#### Void
`void` 与  `any`相反，表示没有任何类型，如:
```ts
function test(): void {
    console.log('This is test.');
}
```

#### Null 和 Undefined
 和 void相似，它们的本身的类型用处不是很大：
 ```ts
// 我们可以为这些变量分配的东西不多！
let u: undefined = undefined;
let n: null = null;
// 联合类型
let un: number | undefined = undefined;
un = 1;
un = 'abc'; // Error: [ts] Type '"abc"' is not assignable to type 'number'.
 ```
 #### Never
`never`类型表示的是那些永不存在的值的类型。例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
`never` 类型的函数:
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```
#### Object
`object`表示非原始类型，也就是除`number`,`string`,`boolean`,`symbol`,`null`或`undefined`之外的类型。
```ts
declare function create(o: object | null): void;
create({prop: 0}); // Ok
create(null); // Ok
create(42); // Error: [ts] Argument of type '42' is not assignable to parameter of type 'object'.
```
#### 类型断言
只是在编译阶段起作用, TypeScript会假设你，程序员，已经进行了必须的检查。
```ts
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
```
`as`语法, 当在`TypeScript`里使用 `JSX`时，只有 `as`语法断言是被允许的。
```ts
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
```
#### let
尽可能的使用`let`代替 `var`
### 变量声明
#### 变量声明

- var
可以重复声明，作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在
```js
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}
// 输出 10 次 10
```
- let
不能重复声明,不能在被声明之前读或写,<i>暂时性死区</i>
```ts
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
}
// 输出
0
1
2
3
4
5
6
7
8
9

```
- const
`const`是对`let`的一个增强，阻止对一个变量再次赋值,

#### 解构
- 解构数组
```ts
let input = [1, 2];
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input); // 1 2
```
使用`...`创建剩余变量
```ts
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]
```
- 解构对象
```ts
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a); // foo
console.log(b); // 12
```
在对象中使用`...`创建剩余变量
```ts
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, ...b } = o;
console.log(a); // foo
console.log(b); // { b: 12, c: 'bar' }
```
指定对象属性对类型
```ts
let {a, b}: {a: string, b: number} = o;
```
#### 默认值
加上`?`表示这个参数可传可不传,如果不传可以使用默认值
```ts
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
```

#### 函数声明
```ts
type C = { a: string, b?: number }
function f1({ a, b }: C): void {
    console.log(a);
    console.log(b);
}
f1({ a: 'TypeScript', b: 1 })
// TypeScript
// 1
```

TypeScript编译器不允许展开泛型函数上的类型参数。 这个特性会在TypeScript的未来版本中考虑实现

### 接口
接口描述
```ts
interface UserInterface {
    name: string,
    // 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
    age?: number, // 问号表示可选属性s
    readonly iphone: nubmer, // 只读属性，赋值后不能被改变
    [propName: string]: any // 其它属性
}
function User(userObj: UserInterface) {
    console.log(userObj.name)
}
User({name:'ts', age:1}) // ts
```
只读属性
```ts
let a: number = [1, 2, 3];
let b: ReadonlyArray<number>  = a;
b[0] =  12; // Error: [ts] Index signature in type 'ReadonlyArray<number>' only permits reading.
```
#### 函数类型
```ts
interface SearchFun {
    (source: string, subString): boolean;
}
let mySearch: SearchFun;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
```
将索引签名设置为只读，这样就防止了给索引赋值:
```ts
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ['a','b'];
myArray[2]  = 'other'; // Error:  [ts] Index signature in type 'ReadonlyStringArray' only permits reading.
```
- implements 实现接口
- extends 继承
### 类
类的代码片段:
```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}
let greeter = new Greeter('world');
console.log(greeter.greet()) // Hello, world
```
- 继承 `extends`
- `public` 公有,默认
- `private` 私有
- `protected` 和`private`类似, 但是在派生类中仍可访问
- `readonly` 修饰符
- 存取器 `getter/setters`,
只带有 get不带有 set的存取器自动被推断为 readonly
- 静态属性 `static`,如`Grid`类, 不需要初始化,直接`Grid.`就能访问静态属性
- 抽象类 `abstract` 作为基类

### 函数
代码片段:
```ts
let myAdd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number { return x + y; };
```
#### 剩余参数
```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName); // Joseph Samuel Lucas MacKinzie
```
#### this
通过箭头函数改变this的指向, 箭头函数能保存函数创建时的 this值，而不是调用时的值
#### 重载

### 泛型
软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。使用`泛型`来创建可重用的组件，一个组件可以支持多种类型对数据。
泛型就是把类型当变量
代码片段:
```ts
function identity<T>(arg: T): T { // T 帮助我们捕获用户传人的类型,比如 number
    return arg;
}
```
```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```
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