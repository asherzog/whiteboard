function parenth(str) {
  if (str[0] == ')' || str[str.length -1] == '(' || str.length % 2 != 0) {
    return false;
  }
  else {
    var open = 1;
    var closed = 0;
    for (var i = 1; i < str.length; i++) {
      if (str[i] == '(') {
        open++;
      }
      else {
        closed++;
        if (closed > open) {
          return false;
        }
      }
    }
    return open == closed;
  }
}

console.log(parenth('()()'));
console.log(parenth('())(()'));
console.log(parenth(')()()('));
console.log(parenth('((((()))))'));
