//if, else, nested if
// if statement 
 var angka = 15;
 if (angka === 10) {
   alert ('anda memasukkan angka 10');
 }

 // else statement
 let cuaca = "cerah";

if (cuaca === "hujan") {
    console.log("Saya membutuhkan payung.");
} else {
    console.log("Cuacanya cerah, Saya tidak perlu payung.");
}

//nested if statement 
let nilai = 85;

if (nilai >= 70) {
    console.log("Selamat! Anda lulus.");

    if (nilai >= 90) {
        console.log("Anda mendapat nilai A.");
    } else if (nilai >= 80) {
        console.log("Anda mendapat nilai B.");
    } else {
        console.log("Anda mendapat nilai C.");
    }

} else {
    console.log("Maaf, Anda tidak lulus.");
}

//switch case
let hari = "Senin";

switch (hari) {
   case "Senin":
       console.log("Hari kerja, mulai minggu yang baru.");
       break;
   case "Selasa":
       console.log("Hari kerja, beraktivitas dengan semangat.");
       break;
   case "Rabu":
   case "Kamis":
       console.log("Hari kerja, sudah pertengahan minggu.");
       break;
   case "Jumat":
       console.log("Hari kerja, horee, besok libur!");
       break;
   case "Sabtu":
   case "Minggu":
       console.log("Hari libur, nikmati waktu luang Anda.");
       break;
   default:
       console.log("Hari yang Anda masukkan tidak valid.");
}

//for statement 
for (let i = 0; i < 5; i++) {
   console.log("Antrian ke-" + i);
}

//while, do while statement
//while
let n = 0;
let x = 0;
while (n < 3) {
   n++;
   x += n;
   console.log(n);
}

//do..while
let count = 0;

do {
    console.log("Antrian ke-" + count);
    count++;
} while (count < 5);

//Function
function sapa(nama) {
   console.log("Halo, " + nama + "!");
}

sapa("Eun woo");
sapa("Karina");
sapa("bubub");

 


