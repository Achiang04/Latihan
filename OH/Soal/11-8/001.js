/**
Buatlah sebuah script untuk menampilkan nama & nilai dari siswa di kelas :
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
contoh : 
1.
name = 'Rocky'
nilai = '90'
output : 'Nilai Rocky mendapatkan nilai A'

name = 'John Doe'
nilai = '0'
output : 'Nilai Invalid

**/

function lulus(nama, nilai) {
  // code here
}

console.log(lulus("bambang", 100));
console.log(lulus("asep", 65));
console.log(lulus("ucup", 64));
console.log(lulus("joseph", 35));
console.log(lulus("kambing", 34));
console.log(lulus("goblok", 0));
console.log(lulus("gila", -5));
