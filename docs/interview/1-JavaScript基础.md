---
{
    'title':JavaScript基础
}
---
# JavaScript基础

# 一、JavaScript基础
<a name="aRvmw"></a>
## (一)变量和类型
<a name="Lwol0"></a>
### 1. `JavaScript`规定了几种语言类型
Javascript 包括Number、String、Boolean、Symbol、Object
<a name="WaCAR"></a>
#### Number（数字）
<a name="E8Az5"></a>
#### String（字符串）
<a name="AH5tO"></a>
#### Boolean（布尔）
<a name="hqhu6"></a>
#### Symbol（符号）（第六版新增）
<a name="Sx9gs"></a>
#### Object（对象）

- Function (函数)
- Array（数组）
- Date（日期）
- RexExp（正则表达式）
- null（空）
- undefined（未定义）
- JavaScript 还有一种内置[`Error`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)（错误）类型

<a name="HYGVE"></a>
#### 参考文章
MDN【重新介绍 JavaScript】[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

<a name="kuH57"></a>
### 2. `JavaScript`对象的底层数据结构是什么
在计算机科学中, 对象是指内存中的可以被 [标识符](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)引用的一块区域。<br />一个 Javascript 对象就是键和值之间的映射.。键是一个字符串（或者 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)） ，值可以是任意类型的值。 这使得对象非常符合 [哈希表](http://en.wikipedia.org/wiki/Hash_table)。<br />ECMAScript定义的对象中有两种属性：数据属性和访问器属性。
<a name="yD4o6"></a>
#### 数据属性
数据属性是键值对，并且每个属性拥有下列特性：

| 特性 | 数据类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| [[Value]] | 任何Javascript类型 | 包含这个属性的数据值。 | undefined |
| [[Writable]] | Boolean | 如果该值为 `false，`则该属性的 [[Value]] 特性 不能被改变。 | true |
| [[Enumerable]] | Boolean | 如果该值为 `true，`则该属性可以用 [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 循环来枚举。 | true |
| [[Configurable]] | Boolean | 如果该值为 `false，`则该属性不能被删除，并且 除了 [[Value]] 和 [[Writable]] 以外的特性都不能被改变。 | tru |

<a name="UyEdt"></a>
#### 访问性属性
访问器属性有一个或两个访问器函数 (get 和 set) 来存取数值，并且有以下特性:

| 特性 | 类型 | 描述 | 默认值 |
| :--- | :--- | :--- | :--- |
| [[Get]] | 函数对象或者 undefined | 该函数使用一个空的参数列表，能够在有权访问的情况下读取属性值。另见 `[get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/get)。` | undefined |
| [[Set]] | 函数对象或者 undefined | 该函数有一个参数，用来写入属性值，另见 `[set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/set)。` | undefined |
| [[Enumerable]] | Boolean | 如果该值为 `true，则该属性可以用` [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 循环来枚举。 | true |
| [[Configurable]] | Boolean | 如果该值为 `false，则该属性不能被删除，并且不能被转变成一个数据属性。` | true |

<a name="rnlgU"></a>
#### 参考文章
MDN【JavaScript 数据类型和数据结构】[链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

<a name="lJC2o"></a>
### 3. `Symbol`类型在实际开发中的应用、可手动实现一个简单的 `Symbol`
<br />
```
var s = Symbol();
console.log(typeof s); // "symbol"
```

<a name="GrMOX"></a>
#### 应用场景1：使用Symbol来作为对象属性名(key)

```
const PROP_NAME = Symbol()
const PROP_AGE = Symbol()
let obj = {
  [PROP_NAME]: "一斤代码"
}
obj[PROP_AGE] = 18
obj[PROP_NAME] // '一斤代码'
obj[PROP_AGE] // 18
```

Symbol类型的key是不能通过`Object.keys()`或者`for...in`来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

也正因为这样一个特性，当使用`JSON.stringify()`将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外。<br />我们可以利用这一特点来更好的设计我们的数据对象，让“对内操作”和“对外选择性输出”变得更加优雅。<br />专门针对Symbol的API，比如：

```
// 使用Object的API
Object.getOwnPropertySymbols(obj) // [Symbol(name)]
// 使用新增的反射API
Reflect.ownKeys(obj) // [Symbol(name), 'age', 'title']
```

<a name="uB3Go"></a>
#### 应用场景2：使用Symbol来替代常量

```
const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = Symbol()
```


<a name="ufBEa"></a>
#### 手动实现

```javascript
(function() {
    var root = this;

    var generateName = (function(){
        var postfix = 0;
        return function(descString){
            postfix++;
            return '@@' + descString + '_' + postfix
        }
    })()

    var SymbolPolyfill = function Symbol(description) {

        if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

        var descString = description === undefined ? undefined : String(description)

        var symbol = Object.create({
            toString: function() {
                return this.__Name__;
            },
            valueOf: function() {
                return this;
            }
        })

        Object.defineProperties(symbol, {
            '__Description__': {
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false
            },
            '__Name__': {
                value: generateName(descString),
                writable: false,
                enumerable: false,
                configurable: false
            }
        });

        return symbol;
    }

    var forMap = {};

    Object.defineProperties(SymbolPolyfill, {
        'for': {
            value: function(description) {
                var descString = description === undefined ? undefined : String(description)
                return forMap[descString] ? forMap[descString] : forMap[descString] = SymbolPolyfill(descString);
            },
            writable: true,
            enumerable: false,
            configurable: true
        },
        'keyFor': {
            value: function(symbol) {
                for (var key in forMap) {
                    if (forMap[key] === symbol) return key;
                }
            },
            writable: true,
            enumerable: false,
            configurable: true
        }
    });

    root.SymbolPolyfill = SymbolPolyfill;

})()
```

<a name="larOh"></a>
#### 参考文章
【理解和使用ES6中的Symbol】[链接](https://www.jianshu.com/p/f40a77bbd74e)<br />【 冴羽的JavaScript博客】[链接](https://segmentfault.com/a/1190000015262174)

<a name="4gGb9"></a>
### 1·4. `JavaScript`中的变量在内存中的具体存储形式
存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。<br />根据数据类型的的不同，有的变量存储在栈中，有的存储在堆中。<br />对于**栈内存**和**栈内存**之间的值是拷贝关系，当改变一个栈的内容，不会影响其它栈的内容，栈与栈是互相不影响的。其取值规则是，先进后出。堆内存和栈内存是不一样的，栈内存就好比是储物格子，怎么放的就怎么拿，没有栈的那种存放顺序。<br />原始变量类型及他们的值存储在栈中，当吧一个原始变量传递给另一个原始变量时，是把一个一段栈空间的内容复制到另一段栈空间，这两个原始值互相不影响。<br />引用值是把引用变量的名称存储在栈中，但是把其实际对象存在堆中，且存在一个指针有变量名指向存储在堆中的实际对象，当吧引用对象传递给另一个变量时，复制的其实是指向实际对象的指针，此时，若通过方法改变其中一个变量的值，则访问另一个变量时，其值也会随之加以改变;但若不通过方法，而是通过重新赋值，此时相当于重新开了一段内存，该值的原指针改变 ，则另外一个值不会随他的改变而改变。<br />Number、Stirng、Boolean、Null、Underfined这些基本数据类型，他们的值直接保存在栈中;<br />Object、Function、Array、Date、RegExp这些引用类型，他们的引用变量储存在栈中，通过指针指向储存在堆中的实际对象

<a name="6tbpo"></a>
### 5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作
<br />**装箱：把基本数据类型转化为对应的引用数据类型的操作。**<br />**在《javascript高级程序设计》中有这样一句话：<br />每当读取一个基本类型的时候，后台就会创建一个对应的基本包装类型对象，从而让我们能够调用一些方法来操作这些数据。

**拆箱：将引用类型对象转换为对应的值类型对象**<br />**<br />**<br />**
<a name="0DThM"></a>
#### 参考文章
【JavaScript基本包装类型(自动装箱和自动拆箱)(instanceof方法)】[链接](https://blog.csdn.net/Liar_/article/details/67637034)<br />【JS里面的装箱和拆箱操作】[链接](http://copyfuture.com/blogs-details/0de7e3971c76d5ab5632db672124c932)

<a name="PLtTg"></a>
### 6.理解值类型和引用类型
（1）值类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null  （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）(ECMAScript 2015新增了一种基本数据类型：symbol , 故基本数据类型有6种)<br />（2）引用类型：对象（Object）、数组（Array）、函数（Function）
<a name="wkZBM"></a>
#### 参考文章
【[js中的值类型和引用类型的区别](https://www.cnblogs.com/leiting/p/8081413.html)】[链接](https://www.cnblogs.com/leiting/p/8081413.html)

<a name="dwGbR"></a>
### 7. `null`和 `undefined`的区别
<br />undefined和null在if语句中，都会被自动转为false，相等运算符甚至直接报告两者相等。

**null表示"没有对象"，即该处不应该有值。**典型用法是：<br />

> （1） 作为函数的参数，表示该函数的参数不是对象。
> （2） 作为对象原型链的终点。
> 


```
Object.getPrototypeOf(Object.prototype)
// null
```

**undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。**典型用法是：<br />

> （1）变量被声明了，但没有赋值时，就等于undefined。
> （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
> （3）对象没有赋值的属性，该属性的值为undefined。
> （4）函数没有返回值时，默认返回undefined。

<a name="2uONy"></a>
#### 参考文章

- 【undefined与null的区别-阮一峰】[链接](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

<a name="4Uq9Z"></a>
### 8.至少可以说出三种判断 `JavaScript`数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

| 不同类型的优缺点 | typeof | instanceof | constructor | Object.prototype.toString.call |
| --- | --- | --- | --- | --- |
| 优点 | 使用简单 | 能检测出引用类型 | 基本能检测所有的类型（除了null和undefined） | 检测出所有的类型 |
| 缺点 | 只能检测出基本类型（出null） | 不能检测出基本类型，且不能跨iframe | constructor易被修改，也不能跨iframe | IE6下，undefined和null均为Object |

最简单的判断是数组的方法，是object.prototype.toString.call()

<a name="pALpi"></a>
#### 参考文章

- 【判断js数据类型的四种方法，以及各自的优缺点（很详细哦）】[链接](https://blog.csdn.net/lhjuejiang/article/details/79623973)

<a name="pgfYs"></a>
### 9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用
如果把通过函数或方法调用，明确的将某种类型转换成另一种类型称为显示转换 ，相反则称为隐式类型转换<br />实际上在条件判断运算 `==` 中的转换规则是这样的:<br />（1） 如果比较的两者中有布尔值(Boolean)，会把 `Boolean` 先转换为对应的 Number，即 0 和 1，然后进行比较。

（2）如果比较的双方中有一方为 `Number`，一方为 `String`时，会把 `String` 通过 `Number()` 方法转换为数字，然后进行比较。

（3）如果比较的双方中有一方为 `Boolean`，一方为 `String`时，会将双方转换为数字，然后再进行比较。

（4）如果比较的双方中有一方为 `Number`，一方为`Object`时，则会调用 `valueOf` 方法将`Object`转换为数字，然后进行比较。<br />为避免引起混乱的隐含类型转换，在你比较值和表达式类型的时候始终使用===和!==操作符

  - <br />复合对象类型在和基础值类型进行表达式操作时，会基于“场景”自动调用toString或是valueOf方法，以最为"恰当"的方式，自动完成表达式计算
  - 全等表达式会比较数据类型，复合对象类型不会进行隐式转换，即不执行toString或valueOf方法而直接参与比较计算
<a name="fYKoa"></a>
#### 参考文章

- 【 聊一聊 JS 中的『隐式类型转换』】[https://segmentfault.com/a/1190000004482388](https://segmentfault.com/a/1190000004482388)
- 【 深入 js 隐式转换 】[http://xxdy.tech/2018/05/23/jstype/#more](http://xxdy.tech/2018/05/23/jstype/#more)
- 【 你所忽略的js隐式转换 】[https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227769&idx=1&sn=617160e64d2be13169b1b8f4506d8801&chksm=bd495ffd8a3ed6eb226d4ef193ff2ce3958d2d03d1f3047b635915f8215af40996c2f64d5c20&scene=21#wechat_redirect](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227769&idx=1&sn=617160e64d2be13169b1b8f4506d8801&chksm=bd495ffd8a3ed6eb226d4ef193ff2ce3958d2d03d1f3047b635915f8215af40996c2f64d5c20&scene=21#wechat_redirect)

<a name="dKcwt"></a>
### 10.出现小数精度丢失的原因， `JavaScript`可以存储的最大数字、最大安全数字， `JavaScript`处理大数字的方法、避免精度丢失的方法
<a name="F8Cgk"></a>
#### 解决方案
对于整数，前端出现问题的几率可能比较低，毕竟很少有业务需要需要用到超大整数，只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度。<br />对于小数，前端出现问题的几率还是很多的，尤其在一些电商网站涉及到金额等数据。解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数），也就是说，尽量在业务中避免处理小数

```javascript
var num =（0.1*100 + 0.2*100）/ 100；
console.log(num);
```

最大数字：9007199254740991，也就是2的53次方减一<br />为了避免这个问题，我目前采用的方法就是与后台沟通，统一采用string类型来传输此类数据，或者是在初始化数据时马上转化为字符串，这样前端在业务中全程都是使用字符串来操作，就不会产生精度丢失问题。

如果超过这个值，那么js会出现不精确的问题。这个值为16位。

解决办法：<br />尽量不用浮点数，js中因为都是浮点数这个方法对它不行。<br />浮点数定点化。<br />用字符串表示数字。<br />用数组表示大数解决大数过大时的精度问题。

<a name="SZCeF"></a>
#### 参考文章

- 【 JS数字太大导致的精度丢失问题原因及解决方案 】[https://blog.csdn.net/qq_35271556/article/details/80137474](https://blog.csdn.net/qq_35271556/article/details/80137474)
- <br />
<a name="KQFOZ"></a>
## (二)原型和原型链
<a name="B2S00"></a>
### 1.理解原型设计模式以及 `JavaScript`中的原型规则
所有的引用类型（array, function, object）都有一个_proto_属性（隐式原型），属性值是一个普通的对象。
<a name="NzYG7"></a>
#### 参考文章

- 【 JS原型规则有哪些 】[https://www.jiangweishan.com/article/js82ig88523058.html](https://www.jiangweishan.com/article/js82ig88523058.html)
<a name="7rG3p"></a>
### 2. `instanceof`的底层实现原理，手动实现一个 `instanceof`
<br />从当前引用的_proto_一层一层顺着原型链往上找，能否找到对应的prototype。找到了就返回true<br />`O instanceof C` 会被编译为方法调用 -- `InstanceofOperator(O, C)`，其实现如下：
```
function instance_of(L, R) { // L即per ；  R即Person
   var O = R.prototype; //O为Person.prototype
   L = L.__proto__;       // L为per._proto_
   while (true) {    //执行循环
        if (L === null)   //不通过
            return false;   
        if (O === L)       //判断：Person.prototype ===per._proto_？
             return true;  //如果等于就返回true，证明per是Person类型
        L = L.__proto__;                   
   }
}
```
<a name="Al1CN"></a>
### 3.实现继承的几种方式以及他们的优缺点
<a name="2yG3b"></a>
#### （1）构造函数继承

（2）寄生继承

（3）组合继承<br />（4） 原型继承<br />（5）寄生式继承<br />（6）寄生原型式继承

<a name="GtQCf"></a>
### 4.至少说出一种开源项目(如 `Node`)中应用原型继承的案例<br />
<a name="z2WCQ"></a>
### 5.可以描述 `new`一个对象的详细过程，手动实现一个 `new`操作符

- `new` 操作符会返回一个对象，所以我们需要在内部创建一个对象
- 这个对象，也就是构造函数中的 `this`，可以访问到挂载在 `this` 上的任意属性
- 这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来
- 返回原始值需要忽略，返回对象需要正常处理

```javascript
function create(Con, ...args) {
  let obj = {}
  Object.setPrototypeOf(obj, Con.prototype)
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj
}
```

<a name="HPpvf"></a>
### 6.理解 `es6class`构造以及继承的底层实现原理
es6为我们提供了像面向对象继承一样的语法糖。
<a name="PfUy3"></a>
#### 参考文章
【ES6类以及基础的实现原理】[https://segmentfault.com/a/1190000014798678](https://segmentfault.com/a/1190000014798678)
<a name="XnKYC"></a>
## (三)作用域和闭包
<a name="vubgH"></a>
### 1.理解词法作用域和动态作用域
**作用域**<br />作用域是指程序源代码中定义变量的区域。<br />作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。<br />JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

```javascript
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2; // 如果去掉前面的var，会打印2
    foo();
}

bar(); // 1
```

<a name="DCiCF"></a>
### 2.理解 `JavaScript`的作用域和作用域链
<a name="pO6mi"></a>
### 
作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。

**作用域就是一个独立的地盘，让变量不会外泄、暴露出去**。也就是说**作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突**<br />****ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域**。ES6的到来，为我们提供了‘块级作用域’,可通过新增命令let和const来体现。

当前作用域没有定义的变量，这成为 自由变量 。

如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 作用域链 。
<a name="1zhAb"></a>
### 3.理解 `JavaScript`的执行上下文栈，可以应用堆栈信息快速定位问题
试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，所以 ECStack 最底部永远有个 globalContext：
```
ECStack = [
        globalContext
    ];
```


<a name="FAYC0"></a>
### 4. `this`的原理以及几种不同使用场景的取值
<a name="TPqKz"></a>
### 
作为函数调用 <br />作为对象方法调用<br /> 作为构造函数调用 <br />使用 apply 或 call 调用


<a name="BX5Yj"></a>
### 5.闭包的实现原理和作用，可以列举几个开发中闭包的实际应用
**闭包是一种特殊的对象**。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。

**通常，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。**<br />**<br />**创建闭包最常见方式，就是在一个函数内部创建另一个函数**<br />**应用闭包的主要场合是：设计私有的方法和变量。

- 闭包的缺点就是常驻内存会增大内存使用量，并且使用不当很容易造成内存泄露。<br />
- 如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗<br />
```
function fun(n,o){
  console.log(o);
  return {
    fun: function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  // undefined
a.fun(1);        // 0        
a.fun(2);        // 0
a.fun(3);        // 0
var b = fun(0).fun(1).fun(2).fun(3);  // undefined, 0, 1, 2
var c = fun(0).fun(1);  // undefined, 0
c.fun(2);        // 1
c.fun(3);        // 1
```
<a name="NE1kL"></a>
### 6.理解堆栈溢出和内存泄漏的原理，如何防止

<a name="bsOLj"></a>
### 7.如何处理循环的异步操作<br />
<a name="k7Yry"></a>
### 8.理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理

<a name="jCRhV"></a>
## (四)执行机制
<a name="5sJof"></a>
### 1.为何 `try`里面放 `return`， `finally`还会执行，理解其内部机制<br />
<a name="LJFPf"></a>
### 2. `JavaScript`如何实现异步编程，可以详细描述 `EventLoop`机制<br />
<a name="6tHFP"></a>
### 3.宏任务和微任务分别有哪些<br />
<a name="lKbmL"></a>
### 4.可以快速分析一个复杂的异步嵌套逻辑，并掌握分析方法<br />
<a name="I2Ozq"></a>
### 5.使用 `Promise`实现串行<br />
<a name="PJqYS"></a>
### 6. `Node`与浏览器 `EventLoop`的差异<br />
<a name="q0AiS"></a>
### 7.如何在保证页面运行流畅的情况下处理海量数据
<a name="4TVNJ"></a>
### 

<a name="fnwjO"></a>
## (五)语法和API
<a name="Vhb0f"></a>
### 1.理解 `ECMAScript`和 `JavaScript`的关系<br />
<a name="eKMkJ"></a>
### 2.熟练运用 `es5`、 `es6`提供的语法规范，<br />
<a name="KWnuB"></a>
### 3.熟练掌握 `JavaScript`提供的全局对象（例如 `Date`、 `Math`）、全局函数（例如 `decodeURI`、 `isNaN`）、全局属性（例如 `Infinity`、 `undefined`）<br />
<a name="LVgiB"></a>
### 4.熟练应用 `map`、 `reduce`、 `filter` 等高阶函数解决问题<br />
<a name="hTsLN"></a>
### 5. `setInterval`需要注意的点，使用 `settimeout`实现 `setInterval`<br />
<a name="cg50k"></a>
### 6. `JavaScript`提供的正则表达式 `API`、可以使用正则表达式（邮箱校验、 `URL`解析、去重等）解决常见问题<br />
<a name="GhX8L"></a>
### 7. `JavaScript`异常处理的方式，统一的异常处理方案
<a name="HxEQr"></a>
### 
<a name="WBJsE"></a>