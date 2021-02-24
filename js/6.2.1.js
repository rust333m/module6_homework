let arr = [1, 0, 5, 2, 4, 6, 7, null, undefined, null, 0, 2];

function check(array) {
  let odd = 0;
  let even = 0;
  let others = 0;
  let zeros = 0;
  array.forEach(element => {
    if (element == null || element == undefined) {
      others += 1;
    }
    else if (element == 0) {
      zeros += 1;
    }
    else if (element % 2 == 0) {
      even += 1;
    }
    else {
      odd += 1;
    }
  });

  console.log(`${even} - even number, ${odd} - odd numbers, ${zeros} - zeros, ${others} - number of other types`);
}

check(arr);