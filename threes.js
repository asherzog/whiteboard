// function threes(num) {
//   while (num > 1) {
//     if (num % 3 == 0) {
//       console.log(0);
//       num = num / 3;
//     }
//     else if ((num +1) % 3 == 0) {
//       console.log(1);
//       num = (num +1) / 3;
//     }
//     else {
//       console.log(-1);
//       num = (num -1) / 3;
//     }
//   }
//   return num;
// }


function threes(num) {
  if (num == 1) {
    return num;
  }else if (num % 3 == 0) {
    console.log(0);
    return threes((num/3));
  } else{
    if (num % 3 == 1) {
      console.log(-1);
      return threes((num-1));
    } else {
      console.log(1);
      return threes((num+1));
    }
  }
}


console.log(threes(3133757));
