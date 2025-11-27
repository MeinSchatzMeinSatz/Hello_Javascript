// 괄호 회전하기
function solution(s) {
  // n: 문자열의 길이를 저장(회전 횟수 결정용)
  const n = s.length;

  // answer: 올바른 괄호 문자열이 되는 회전 횟수를 카운트
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    // i: 문자열을 회전시키는 횟수 (0부터 문자열 길이만큼)

    // 여는 괄호를 저장할 스택(배열)
    const stack = [];

    // 현재 회전된 문자열이 올바른 괄호인지 체크하는 플래그
    let isCorrect = true;

    for (let j = 0; j < n; j++) {
      // j: 회전된 문자열의 각 문자를 순회

      const c = s[(i + j) % n];
      // c: 현재 검사할 문자
      // (i + j) % n: 회전효과를 주는 인덱스 계산
      // 예: i = 1, j = 0 -> s[1] (두 번째 문자부터 시작)
      //    i = 1, j = 5, n = 6 -> s[0] (마지막은 첫 번째 문자)

      if (c === "[" || c === "(" || c === "{") {
        // 여는 괄호인 경우

        stack.push(c);
        // 스택에 여는 괄호를 추가
      } else {
        // 닫는 괄호인 경우 ("]", ")", "}")

        if (stack.length === 0) {
          // 스택이 비어있으면 (짝이 없는 닫는 괄호)

          isCorrect === false;

          break;
          // 더 이상 검사할 필요 없으므로 반복문 종료
        }

        const top = stack[stack.length - 1];
        // top: 스택의 가장 위에 있는 요소(가장 최근 여는 괄호)

        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          // 괄호 짝이 맞지 않는 경우

          isCorrect = false;

          break;
        }
      }
    }

    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}
