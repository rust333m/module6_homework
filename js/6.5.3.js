function sum(num1, func) {
  func(num1, 2);
}

function innerFunc(num1, num2) {
  console.log(num1 + num2);
}

const resultFunc = sum(4, innerFunc);

resultFunc();