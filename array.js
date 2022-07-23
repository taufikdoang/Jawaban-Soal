var scores = [100, 50, 75, 70, 35];

for (var i = 0; i < scores.length; i++) {
    // console.log(scores[i])
}

// case 1 : hitung jumlah total dari scores

var scores = [100, 50, 75, 70, 35];
var total = 0;

for (var i = 0; i < scores.length; i++) {
    total += scores[i]
}
// console.log(total)

// case 2 : hitung rata2 (mean) dari scores diatas

var mean = total / scores.length
// console.log(mean)

var stats = [[1, 2, 3],
[-1],
[10, 20, 30, 40, 50],
[-5, -7],
[15, 17, 19]]

//a. hitung total semua angka

var jumlah = 0;

for (var i = 0; i < stats.length; i++) {
    for (var j = 0; j < stats[i].length; j++) {
        jumlah = jumlah + stats[i][j]
    }
}
// console.log(jumlah)

//b. hitung angka yg mengandung belasan

var jumlahbelasan = 0;

for (var i = 0; i < stats.length; i++) {
    for (var j = 0; j < stats[i].length; j++) {
        if (stats[i][j] < 20 && stats[i][j] >= 11) {
            jumlahbelasan = jumlahbelasan + stats[i][j]
        }
    }
}
// console.log(jumlahbelasan)

// //c. kelompokkan angka yg minus

var arrayMint = []
for (var i = 0; i < stats.length; i++) {
    for (var j = 0; j < stats[i].length; j++) {
        if (stats[i][j] < 0) {
            arrayMint.push(stats[i][j])
        }
    }
}
// console.log(arrayMint)


// var murid = [
//     [1, "raffa", 3.5],
//     [2, "khansa", 3.0],
//     [3, "papah", 2.1]];


// for (var i = 0; i < murid.length; i++){
//         console.log(murid[i][0] + ", " + murid[i][1] + ", " + murid[i][2] )
//     }


// for (var i = 0; i < murid.length; i++) {
//     if (murid[i][2] >= 3.0) {
//         console.log(murid[i][0] + ", " + murid[i][1] + ", " + murid[i][2],
//             murid[i][1] + ", lulus")
//     } else {
//         console.log(murid[i][0] + ", " + murid[i][1] + ", " + murid[i][2],
//             murid[i][1] + ", tidak lulus")
//     }
// }


var products = ["Senter", "Radio", "Antena", "Obeng"];

// menambahkan tv ke dalam array products
products.push("Televisi");

// menapilkan isi array
// console.log(products);


// case 1


let watches = ["Swiss Army","Daniel Wellington","Dublot"]

temp = " "
a = watches[0]
b = watches[1]
c = watches[2]

for (let i = 0; i < watches.length; i++) {
    temp += a,b,c
    console.log("Saya Punya", a+", "+b+", "+c+".")
    temp = " "
    break;
}

let arloji = ['A', 'B', 'C', 'D', 'E']

a = arloji[0]
b = arloji[1]
c = arloji[2]
d = arloji[3]
e = arloji[4]

console.log("Saya Punya", a+", "+b+", "+c+", "+d+", "+e+".")

// case 3

let kalimat = "belajar bersama dunia coding yuk";

a = "belajar"
b = "bersama"
c = "dunia"
d = "coding"
e = "yuk"

console.log([a,b,c,d,e])

// case 2

let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
    fruits.sort();             
    console.log(fruits)


