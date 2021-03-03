//pertemuan 2 javascript 
//variable ditandai dengan var (tempat penyimpanan sementara)
//; adalah sebuah syntax dari javascript
//ada 2 output yaitu :
//document.write(akan tampil di html)
//console.log(akan tampil di console)
//buka di kodesanbox.io
var nama = "aristaya";//string tipe data kalimat
var nilai = 10;//tipe data bilangan bulat integer

document.write("nama: "+nama+ ", nilai: "+nilai+"<br>");
document.write("<br>");


//operator bilangan javascript
var a = 5; //a tipe data integer
var b = 3; //b tipe data integer
var hasil //membuat varibel baru untuk penjumlahan
hasil = a + b ; //menggunakan operator +
document.write ("hasil :"+hasil+"<br>");
hasil = a - b ; //menggunakan operator -
document.write ("hasil :"+hasil+"<br>");
hasil = a / b ; //menggunakan opertaor /
document.write ("hasil :"+hasil+"<br>");
hasil = a * b ; //menggunakan operatir *
document.write ("hasil :"+hasil+"<br>");
hasil = a % b ; //menggunakan operator modulo(%)
document.write ("hasil :"+hasil+"<br>");
document.write("<br>");

//operator perbandingan

var a = 5;
var b = 3;
var hasil
hasil =(a == b);
document.write("sama dengan :"+hasil+"<br>");
hasil =(a >= b);
document.write("lebih besar :"+hasil+"<br>");
hasil =(a <= b);
document.write("lebih kecil :"+hasil+"<br>");
hasil =(a != b);
document.write("tidak sama dengan :"+hasil+"<br>");
document.write("<br>");

//operator kondisi yang jika benar bernilai if jika salah false
var nilai = 80;
if(nilai > 80){ //nilai lebih kecil dari 80 jika false maka akan dilanjutkan ke statement else if jika benar makan akan output statement dari else if,jika di else if bernilai false maka akan ke else
  document.write("A");
}
else if(nilai < 90){
  document.write("B");
  document.write("<br>");
  document.write("<br>");
}
else{
  document.write("C");
}

//operator loop perulangan  ada 2 (while loop dan for loop)
//while loop perulangan tidak diketahui
//for loop perulangan yang sudah diketahui

var n= 0;
while (n < 10){//perulangan yang sudah diketahui batasnya
  document.write("nilai perulangan : "+n+"<br><br>");
  n++;//nilai n bertambah 1 sampai batas 10
}

/*
latihan 1
menentukan faktor bilangan
input 20 
output 1,2,4,5,10,20
algoritma : menentukan faktor bilangan 
1.input n
2.loop 1.....n
3.ketikan di dalam loop ,
seleksi kondisi apakah  n%i == 0,
jika benar maka i adalah faktor dari n
*/

var n = 20; // n memiliki nilai 20
var i = 1; // i memiliki nilai 1
while(i<=n){//selama 1 <= 20 makan nilai true akan masuk ke begin yaitu di sini {}
  if(n%i==0){// 20 % 1 == 0 true 
    document.write(+i+"adalah faktorisasi dari : "+n+"<br><br>");
  }
  i++;
}

function faktor(n){ // n memiliki nilai yang akan di inputkan misalnya faktor(20)
  var i = 1; // i memiliki nilai 1
  while(i<=n){//selama 1 <= n makan nilai true akan masuk ke begin yaitu di sini {}
  if(n%i==0){// n % 1 == 0 true 
    document.write(+i+"adalah faktorisasi dari : "+n+"<br><br>");
  }
  i++;
}
}
//function berguna untuk memanggil function berkali-kali dengan nilai berbeda contoh di bawah 
faktor(20)
faktor(100)

/*
tugas mandiri 
1.buatlah 1000 object mobil dengan perulangan 
2.buatlah program faktorial dan faktor suatu bilangan 
*/