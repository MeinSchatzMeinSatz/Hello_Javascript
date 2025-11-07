// 프리미티브 값
/*
- Primitive Value 
  - 언어에 있어 가장 낮은 단계의 값
  - let book = "책";
    "책"은 더 이상 분해, 전개 불가
    이거슨 프리미티브 값

- Primitive Type
  - Number, String, Boolean: 인스턴스 생성 가능
  - Null, Undefined: 인스턴스 생성 불가
  - Object는 프리미티브 값을 제공하지 않음.
*/

let obj = new Number(123);
/*
  인스턴스를 생성하면
  파라미터 값(123)을 인스턴스의 프리미티브 값으로 설정한다.

  프리미티브 값을 갖는 오브젝트
    : Boolean, Date, Number, String
  */

// 예제 2
let obj1 = new Number(123);
console.log(obj1 + 200); // 323

/*
  1. new Number(123)로 인스턴스를 생성하여 obj에 할당한 후 obj에 값을 더하면 값이 더해진다.
  2. obj가 인스턴스이므로 값을 더할 수 없는데 값이 더해지는 이유는
  3. 123을 인스턴스의 프리미티브 값으로 설정하기 때문이다.
  4. 프리미티브 값을 갖는 인스턴스에 값을 더하면 인스턴스의 프리미티브 값에 값을 더한다.
*/

// valueOf()
/**: Number 인스턴스의 프리미티브 값을 반환합니다.
 *
 * data: Number 인스턴스, 숫자
 * 파라미터: 사용하지 않음
 * 반환: 프리미티브 값
 */

let obj2 = new Number("123");
console.log(obj2.valueOf()); // 123

// obj2의 프리미티브 값을 반환합니다.
// 여기서 valueOf는 인스턴스에 대괄호 두 개 열고 primitive value를 key로 하여 값을 구하게 되는 것.
