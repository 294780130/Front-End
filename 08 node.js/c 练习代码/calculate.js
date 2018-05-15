// 实现命令行计算器抽象模块

'use strict';

// 1. 接收参数
const args = process.argv.slice(2); 
// ['node 执行程序所在路径'，'当前脚本所在路径'，....]

// 2. 分析参数

if (args.length !== 3) {
  console.log('参数不合法');
  throw new Error('参数不合法');
  // return false;
}

// P1 OP P2
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

// 3. 进行运算

// let result = eval(`${parameter1} ${operator} ${parameter2}`);
// console.log(result);

const  calc = require('./calculator.js');


// const fs = require('fs');


// const mysql = require('mysql');



let result;
switch (operator) {
  case '+':
    result = calc.add(parameter1, parameter2);
    break;
  case '-':
    result = calc.subtract(parameter1, parameter2);
    break;
  case '*':
  case 'x':
    result = calc.mutiply(parameter1, parameter2);
    break;
  case '/':
  case '÷':
    result = calc.divide(parameter1, parameter2);
    break;
  default:
    throw new Error('不被支持的操作符' + operator);
}
console.log(result);

