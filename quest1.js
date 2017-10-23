var count = 100;
// 함수를 하나 만들고
// 0~ 부터 시작해서 100개의 피보나치 수열을 출력하세요.

// function fibonacci(count){
// 	var cnt =0
// 	var first=0
// 	var second=1
// 	var third=0

// 	while(cnt<count){
		
		
// 		third = first+second
// 		first =second
// 		second= third
// 		cnt++
// 		console.log(third)
// 	}

// 	return third;
// }

// fibonacci(100)
function run(){
var prev =0, next =1;
console.log(0);
console.log(1);
for(var i=2; i<count; i++){
	var sum = prev+next;
	console.log(sum);
	prev = next;
	next = sum;

}
}