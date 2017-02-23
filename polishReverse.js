function polishReverse(str) {
  let splitStr = str.split(' ');
  let tempArr = [];
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] != '+' || splitStr[i] != '-' || splitStr[i] != '*' || splitStr['/']) {
      tempArr.push(parseInt(splitStr[i]));
    } else if (splitStr[i] == '+') {
      let x = tempArr.pop();
      tempArr[tempArr.length -1] += x;
    } else if (splitStr[i] == '-') {
      let x = tempArr.pop();
      tempArr[tempArr.length -1] -= x;
    } else if (splitStr[i] == 'x') {
      let x = tempArr.pop();
      tempArr[tempArr.length -1] *= x;
    } else if (splitStr[i] == '/') {
      let x = tempArr.pop();
      tempArr[tempArr.length -1] /= x;
    }
  }
  return tempArr.join('');
}

console.log(polishReverse('5 1 2 + 4 × + 3 −'));
