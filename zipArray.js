function zipper(arr1, arr2) {
  let answer = [];
  while (arr1.length > 0 && arr2.length > 0) {
    answer.push(arr1.shift());
    answer.push(arr2.shift());
  }
  answer = answer.concat(arr1);
  answer = answer.concat(arr2);
  return answer;
}

console.log(zipper([1,2],[3,4,5,6]));
console.log(zipper([1,2,3], [4,5,6]));


function zipper2(arr1, arr2) {
  let answer = [];
  let l1 = arr1.length;
  let l2 = arr2.length;
  let max = l1;
  if (l2 > l1) {
    max = l2;
  }
  for (var i = 0; i < max; i++) {
    if (arr1[i] != undefined) {
      answer.push(arr1[i]);
    }
    if (arr2[i] != undefined) {
      answer.push(arr2[i]);
    }
  }
  return answer;
}

console.log(zipper2([1,2],[3,4,5,6]));
console.log(zipper2([1,2,3], [4,5,6]));
