var num = [1, 23, 132, 12];
var i = 0;
var total = 0;
while(i < num.length){
    total = total + num[i];
    i = i + 1;
}
console.log(`total: ${total}`);