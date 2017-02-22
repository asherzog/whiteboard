function isAnagram(word1, word2) {
  let sorted1 = word1.split('').sort();
  let sorted2 = word2.split('').sort();
  return sorted1.join('') == sorted2.join('');
}

//
// function isAnagram(word1, word2){
//   let array1 = word1.split('');
//   let array2 = word2.split('');
//   for (var i = 0; i < array1.length; i++) {
//     for (var j = 0; j < array2.length; j++) {
//       if (array1.includes(array2[j])){
//         array2.splice(j,1);
//       }
//     }
//   }
//   console.log(array1)
//   console.log(array2);
//   if (array2.length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(isAnagram('lexampe', 'example'));
//
