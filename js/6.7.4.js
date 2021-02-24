function iteration(num1, num2) {
  let timerId = setInterval(function () {
    console.log(num1);
    if (num1 == num2) {
      clearInterval(timerId);
    }
    num1++;
  }, 1000)

}

iteration(5, 15)
