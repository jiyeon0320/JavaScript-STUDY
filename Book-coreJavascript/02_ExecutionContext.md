## execution context (실행 컨텍스트)

- 실행할 코드에 제공할 환경 정보들을 모아놓은 객체

- stack : 출입구가 하나 뿐인 우물을 생각하면 된다.
  : 비어있는 스택에 순서대로 a b c d 를 넣었다면 꺼낼 때는 d c b a 순으로 마지막에 넣은것부터 꺼낸다.
- queue : 양쪽이 모두 열려있는 파이프 생각하면 된다.
  : a b c d 를 넣으면 반대편으로 a b c d 순으로 나온다.

```
let a = 1;
function outer(){
  function inner(){
    console.log(a); //undefined
    let a = 3;
  }
  inner();
  console.log(a);   //1
}
outer();
console.log(a);  //1
```

## VariableEnvironment

    - 최초의 스냅샷을 유지한다.
    - 실행 컨텍스트를 생성할 때 VariableEnvironment에 정보를 먼저 담은 다음, 이를 그대로 복사해서 LexicalEnvrionment를 만듦.
    - 그 후에 LexicalEnvironment를 주로 활용하게 된다.
    - 초기화 과정은 같고 이 후 코드에 따라 달라지는 것

## LexicalEnvironment

    - 변경사항이 실시간으로 반영됨
