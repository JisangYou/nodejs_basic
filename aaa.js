// 1. 변수의 선언 : var 변수명
// 2. 콘솔에 로그 출력 : console.log("")
// 3. 반복문 : for(int i =0; i<10; i++){}
// 4. 조건문 : if(비교){} else if(비교){} else{}
// 5. 문자열 기본연산 : "문자열" + "문자열" = "문자열문자열"


var a = 10;
var b = 5;


//6. 함수사용하기
// 파라미터에 타입이 없다.
// 문장내에서 retrun이 있는지 여부에 따라서 결정

// function sum(param1, param2){
// 		console.log(param1 + param2);
// }

// 함수만들기
	function sum(param1, param2){
		return param1+param2;
	}
// 함수만들기 2
	var sum = function(param1, param2){
		return param1+param2;
	};

sum(1,2);
// 7. class 사용하기
// 함수 만드는 것과 동일
// function Num(param1, param2){// 클래스는 첫문자 대문자로!, 함수를 그냥 클래스로 사용함. 파일하나가 class라고 보면 된다. 
// 	var a = 0; // private 선언된 변수 : 외부에서 접근 안됨
// 	this.b = 10; // public 으로 선언된 변수 : 외부에서 접근 가능
// 	this.c = function(param1, param2){

// 	};
// }

// 클래스의 사용 ,  Num num = new NUm(~~~)-> 자바에서는 이렇게 사용하나 자바는 함수형 언어이기 때문에...
var num = new Num("Hello", 157);
num.b = 500;
num.c("a", 49949);

























// var a =11;
// var b = "hello";

// // 출력
// console.log(a);
// console.log(b);

// //반목문

// for(var i =0; i<10; i++){
// 	console.log(i);
// }


// //조건문
// if(a>10){
// 	console.log("a가 10보다 큽니다.")
// }else if (a<10){
// 	console.log("a가 10보다 작습니다.")
// }else{
// 	console.log("a가 10이랑 같습니다.")
// }
// // 비교 연산자 중에 ===는 값과 타입이 같은 것