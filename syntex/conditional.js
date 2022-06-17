//주의: 전혀 실용성이 없음
var args = process.argv; //arg 안에 실행된 배열이 들어있음
// [
//     'C:\\Program Files\\nodejs\\node.exe', //nodejs 런타임이 어디에 위치하고있는지
//     'C:\\Users\\컴퓨터이름\\Desktop\\Study\\LearningNodejs\\syntex\\conditional.js', //실행시킨 파일의 경로
//     'next' //우리가 입력한 입력값을 줌
//   ]
console.log(args[2]);
console.log('A');
console.log('B');
if (args[2]==='1'){ //cmd 에서 입력하는 숫자들은 다 string이다.
    console.log('C1');
}
else{
    console.log('C2');
} 
console.log('D');