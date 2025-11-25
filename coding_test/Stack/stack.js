// 스택 구현하기
const stack = []; // 스택 초기화
const maxSize = 10; // 스택의 최대 크기

function isFull(stack) {
  // 스택이 가득 찼는지 확인하는 함수
  return stack.length === maxSize;
}

function isEmpty(stack) {
  // 스택이 비어 있는지 확인하는 함수
  return stack.length === 0;
}

function push(stack, item) {
  // 스택에 데이터를 추가하는 함수
  if (isFull(stack)) {
    console.log("stack is full");
  } else {
    stack.push(item);
    console.log("Data is updated");
  }
}

function pop(stack) {
  // 스택에서 데이터를 꺼내는 함수
  if (isEmpty(stack)) {
    console.log("stack is empty");
    return null;
  } else {
    return stack.pop();
  }
}
