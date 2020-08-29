//add 란 함수에 a와 b라는 파라미터 두개를 받아서
// 받은 두개의 파라미터를 더한 값을 반환한다.
function add(a, b) {
  return a + b;
}
//함수 add에 파라미터는 3,5로 각각 a, b에 대입해서
//반환한 값을 sum에 대입한다.
const sum = add(3, 5);
//sum을 출력하면 결과값이 나옴
console.log(sum);

/* return을 쓰면 끝난다는데
    리턴을 쓰지 않고 실행하는 것은 무슨 차이지?
  */

//name이라는 파라미터를 받는 hello 함수
function hello(name) {
  console.log('hello, ', name, '!');
  console.log(`hello, ${name} ! << 리터럴`);
}
//hello 함수에 jiyeon이라는 파라미터를 넣어서 실행해라
hello('jiyeon');

function hello2(name) {
  //리턴문이 실행되면 이 함수는 끝남. 리턴문 아래에
  //코드 작성해도 실행이 안됨
  return `hello, ${name} ! << 리터럴`;
}
//hello 함수에 jiyeon이라는 파라미터를 넣어서 실행해라
const result = hello2('지연');
console.log(result);

function getGrade(score) {
  // if(score === 100){
  //   return 'A++'
  // } else if(score >=90){
  //   return 'A'
  // } else if(score >=80){
  //   return 'B++'
  // } else if(score >=70){
  //   return 'B'
  // }

  switch (score) {
    case 100:
      console.log('A++');
      break;
    case score >= 90:
      console.log('B++');
      break;
    case score >= 80:
      console.log('C++');
      break;
    default:
      console.log('D');
  }
}
const grade = getGrade(100);
console.log(grade);

/* 객체: object */
const object = {
  key: 'value',
  키: '원하는 값',
};
const dog = {
  name: '멍멍',
  age: 2,
  key: 'value',
};

console.log(dog.name);
console.log(dog);

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
};

// function print(hero){
// const {name, actor, alias} = hero;
function print({ name, actor, alias }) {
  //비구조화할당 - 객체구조분해
  //=> 특정 값들을 객체로 빼온다.
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}이다`;
  console.log(text);
}
print(ironMan);
print(captainAmerica);

/*  */
const dog2 = {
  name: '멍멍이',
  sound: '멍멍',
  say() {
    //이것도 가능
    // say: function(){ //메소드명 생략 가능
    // say: function say(){
    console.log(this.sound);
    //여기서 가리키는 this는 함수가 위치한 객체! 자기 자신을 의미한다.
    //화살표 함수(say: ()=>{})로 하면 콘솔 실행 안된다. 화살표 함수는 this가 무엇을 가리키는지 모름.
    //
  },
};
dog2.say();
