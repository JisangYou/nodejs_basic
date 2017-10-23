//Rest Api 설계
// --------------------
// /서비스명/값
// --------------------
// /피보나치/100 = 숫자배열
// /아나그램/acdagc = true/false

// 1. 서버 모듈(라이브러리)을 import
var http = require("http");


// 2. 서버 모듈을 사용해서 서버를 정의
var server = http.createServer(function(request, response){
	//1. 요청이 온 주소체계가 내가 제공하는 api 구조와 일치하는지 확인
    var cmds=request.url.split("/");
    response.writeHead(200, {'content-Type' : 'text/html'});
    // 2. 주소쳬게가 잘못 되었다면 알려준다.
    if(cmds.length < 3){
    
	response.end("<h>your request is wrong !!!</h>")
	//3. 주소 체계가 정상이면
}else{
	if(cmds[1] == "fibonacci"){
		
		if(isNaN(cmds[2])){ // 숫자면 true Not a Number
		var text = getFibo(cmds[2])
		response.end(text);
	}else{
			response.end("<h>Value is Wrong</h>")
		}
	}else if(cmds[1]=="anagram"){

	}else {
		response.end("<h> NO Service!!!!</h>")
	}
		}

	});

//3. 서버 실행
server.listen(8089, function(){
	console.log("server is running...")
}); 


count =100;
function getFibo(count){

var result = "";

var prev =0, next =1;
result = result +0 + "</br>";
result = result +0 + "</br>";
for(var i=2; i<count; i++){
	var sum = prev+next;
	result = result + sum + "</br>";
	prev = next;
	next = sum;

}

return result

}







// 	var array = request.url.split("/");
// 	// 일반 for문은 배열의 index를 리턴
// 	// for (i in array)
// 	// response.write(" ["+array[i]+"] ")
// 	//향상된 포문은 배열안의 실제 item을 리턴
// 	response.writeHead(200, {'content-Type' : 'text/html'});
// array.forEach(function(item){
// 	response.write(" ["+ item+"] <br> ")
// });
	

// 	// for(i in array)
// 	// 	response.write("["+array[i]+"]");
	
// // 	response.write("guests:"+request.url);
// // // 사용자 요청에 대해 어떻게 응답할지를 정의