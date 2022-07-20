// case 1

// var nilai = 75;

// if (nilai >100){
//     console.log("Charakter is Expert")
// } else if (nilai >70 && nilai <=100){
//     console.log("Charakter is Pro")
// } else if (nilai >50 && nilai <=70){
//     console.log("Charakter is Normal")
// } else if (nilai >30 && nilai <=50){
//     console.log("Charakter is Basic")
// } else if (nilai <=30 && nilai >=0){
//     console.log("Charakter is Beginner")
// } else {
//     console.log("masukkan angkanya yang benar guys")
// }

// case 2

// var minuman = "Tea";

// switch (minuman) {
//     case 'Sweet Tea' :
//         console.log("You Choose Sweet Tea,thanks")
//         break;
//     case 'Plain Tea' :
//         console.log("You Choose Plain Tea,thanks")
//         break;
//     case 'Boba' :
//         console.log("You Choose Boba,thanks")
//         break;
//     case 'Milk Coffee' :
//         console.log("You Choose Milk Coffee,thanks")
//         break; 
//     case 'Choco Ice' :
//         console.log("You Choose Choco Ice,thanks")
//         break;
//     default :
//         if (minuman === "") {
//             console.log("Silahkan Pilih Minuman")
//         } else {
//             console.log("minuman is undefined")
//         }
//         break;
//     }

// case 3

var pembelian = 100000;
var cashback = "FreeOngkir";
var coupon = "Free15%";

switch (cashback) {
    case 'FreeOngkir' :
        if (pembelian >= 50000) {
            var harga = pembelian - (pembelian * 0.1)
            console.log("Total Pembelian Anda Rp", harga)
        } else if (pembelian >= 30000 && pembelian < 50000) {
            var harga = pembelian - (pembelian * 0.05); 
            console.log("Total Pembelian Anda Rp", harga)
        } else {
            var harga = pembelian - (pembelian * 0.025); 
            console.log("Total Pembelian Anda Rp", harga)
        }
            break;
    case 'Free15%' :
        if (pembelian >= 30000) {
            var harga = pembelian - (pembelian * 0.15);
            console.log("Total Pembelian Anda Rp", harga)
        } else {
            var harga = pembelian - (pembelian * 1); 
            console.log("Total Pembelian Anda Rp", harga)
            break;
        }             
    }
