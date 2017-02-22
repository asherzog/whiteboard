function sumDigits(number) {
  var stringInt = number.toString().split('');
  if (stringInt.length == 1) {
    return parseInt(stringInt.join(''));
  } else {
    let sum = stringInt.reduce((a,b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
    return sumDigits(sum);
  }
}

console.log(sumDigits(667));
