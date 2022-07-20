// case 1

// var number = 10;

// for(var i = 1; i <= number; i++) {
//     if (number % i == 0) {  
//        console.log(i)  
//     }
// }


var num = 5;
var temp = '';
var chara = "#"

for (var i = 0; i < num; i++) {
    for (var j = 0; j <= i; j++) {
        temp += chara
    }
    console.log(temp)
    temp = ""
}