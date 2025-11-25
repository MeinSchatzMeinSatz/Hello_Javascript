// 괄호 짝 맞추기
function solution(string) {
  const stack = [];
  for (item of string) {
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
