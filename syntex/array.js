//CRUD
//C: create
//R: read
//U: upload
//D: deleate
var arr = ['A', 'B','C', 'D']; //c
console.log(arr[0]);//배열은 0부터 세기 //r
console.log(arr[3]);

arr[2] = 3;
console.log(arr);//u

console.log(arr.length);//배열 길이 새기: length 주의할 점: 개수는 0부터가 아니라 1부터 새아려짐
//출력결과:4

arr.push('E'); //push: 배열 뒤에 값 추가
console.log(arr);