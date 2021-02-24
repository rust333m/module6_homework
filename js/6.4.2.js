function isPrime(num) {
  if (num > 1000)
    console.log("Данные неверны");
  else if (num === 0 || num === 1)
    console.log("Not Prime");
  else if (num == 2 || num == 3)
    console.log("Prime")
  else if (num % 2 != 0 && num % 3 != 0)
    console.log("Prime");
  else
    console.log("Not Prime");
}

isPrime(10001);