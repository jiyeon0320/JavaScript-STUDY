## 01. 데이터 타입

# 01. 데이터 타입의 종류

- 기본형(primitive type)

  - number, string, boolean, null, undefined 등, ES6에서는 Symbol이 추가됨
  - 값이 담긴 주솟값을 바로 복제함
  - 불변성(immutabiliy)를 띔

- 참조형(reference type)

  - object(객체), array, function, Date, RegExp(정규표현식) 등, ES6에서는 Map, WeakMap, Set, WeakSet 등
    - object를 제외한 것들은 object의 하위 분류에 속함
  - 값이 담긴 주솟값들로 이루어진 묶음을 가리키는 주솟값을 복제함

    <br/>

# 02. 데이터 타입의 배경지식

- 컴퓨터는 모든 데이터를 0 또는 1로 바꿔 기억함
- 0 또는 1만 표현할 수 있는 하나의 메모리 조각을 *비트(bit)*라고 함
- 각 bit는 고유한 식별자(unique identifier)를 통해 위치를 확인할 수 있음
- bit를 일정 단위로 묶음 -> byte = 8bit
  - 1bit마다 0 or 1의 두 가지 값을 표현 -> 1byte는 총 256(2의 8제곱)개의 값을 표현할 수 있음
  - 2byte는 16bit이므로 65536(2의 16승)개의 값을 표현
- 자바스크립트는 숫자의 경우 정수형인지 부동소수형인지 구분하지 않고 64bit(8byte)를 확보함
  - 개발할 때 형변환에 대한 고민을 덜 수 있음
- 모든 데이터는 byte 단위의 식별자, 즉 메모리 주솟값(memory address)을 통해 서로 구분하고 연결할 수 있음
- 변수(variable) : 변할 수 있는 수(수가 숫자만을 뜻하지 않음). 문자열, 객체, 배열 등 모든 데이터도 가능
- 식별자(identifier) : 어떤 데이터를 식별하는 데 사용하는 이름. **변수명**

  <br/>

# 03. 변수 선언

```
var a;  // 변수 a 선언
a = 'abc';  // 변수 a에 데이터 할당

var a = 'abc';  // 변수 선언과 데이터 할당을 한 문장으로 표현
```

- 변할 수 있는 데이터를 만든다. 이 데이터의 식별자는 a로 한다.
- 변할 수 있는 데이터이니 선언할 때, undefined이더라도 나중에 다른 값으로 바꾸면 됨
- 변경 가능한 데이터가 담길 수 있는 공간

<br/>

# 04. 기본형 데이터 & 참조형 데이터

- 불변값

  - 변수(variable)와 상수(constant)를 구분하는 성질은 '변경 가능성'임
  - 변경 가능성의 대상은 _변수 영역 메모리_
    - 한 번 데이터 할당이 이뤄진 변수 공간에 다른 데이터를 재할당할 수 있는지에 대한 여부가 관건
  - 불변성 여부는 _데이터 영역 메모리_
  - 기본형 데이터는 모두 불변값임
  - 변경은 새로 만드는 동작을 통해서 이뤄지는 것

- 가변값
  - 참조형 데이터가 기본적인 성질은 가변값인 경우가 많지만 설정에 따라 변경 불가능한 경우도 있고, 불변값으로 활용하는 방안도 있음
  - 기본형 데이터와의 차이점은 **객체의 변수(property) 영역**이 별도로 존재

# 06. undefined & null

- 두 단어 다 '없음'을 뜻하는 것이지만 미세하게 의미가 다르고 목적도 다름
- undefined

  - 사용자가 명시적으로 지정할 수 있지만 사용을 지양함
  - 값이 존재하지 않을 때, 자바스크립트 엔진이 자동으로 부여함
    - 값을 대입하지 않은 변수, 즉 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근할 때
    - 객체 내부의 존재하지 않는 프로퍼티에 접근하려고 할 때
    - return문이 없거나 호출되지 않는 함수의 실행 결과

  ```
  var a;
  console.log(a);     //undefined. 값을 대입하지 않음

  var obj = {a:1};
  console.log(obj.a); //1
  console.log(obj.b); //undefined. 존재하지 않은 property에 접근
  console.log(b); //c.f) ReferenceError: b is not defined

  var func = function(){ };
  var c = func();     //반환(return)값이 없으면 undefined를 반환하는 것으로 간주함
  console.log(c)      //undefined
  ```

- null

  - '비어있음'을 나타내고 싶을 때, 쓰면 됨
  - 애초에 이런 용도로 만들어진 데이터 타입이니, undefined를 쓰는 일은 없도록
  - typeof null은 object인데 자바스크립트 자체 버그임

    - 변수의 값이 null인지 여부를 판단하기 위해서는 typeof 대신 다른 방식으로 접근해야함
    - 동등연산자(==)로 비교할 경우 null과 undefined가 서로 같다고 판단
    - 일치연산자(===)를 써야지 정확히 판별할 수 있음

    ```
    var n = null;
    console.log(typeof n);  //object

    console.log(n == undefined);   //true
    console.log(n == null);         //true
    console.log(n === undefined);   //false
    console.log(n === null);        //true
    ```
