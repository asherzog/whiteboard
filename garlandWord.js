function garland(input) {
  let count = 0;
  for (var i = 1; i < input.length; i++) {
    let firstHalf = input.substring(0, i);
    let secondHalf = input.substring(input.length -i);
    if (firstHalf === secondHalf) {
      count = i;
    }
  }
  return count;
}

console.log(garland("programmer"));
console.log(garland("alfalfa"));
console.log(garland("onion"));
console.log(garland("hotshots"));
