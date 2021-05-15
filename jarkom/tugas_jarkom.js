// no 9

function chiper(e) {
  const res = e.toLowerCase();
  // console.log(res);
  let temp = "";
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "a") {
      temp += "t";
    } else if (res[i] === "t") {
      temp += "i";
    } else if (res[i] === "o") {
      temp += "p";
    } else if (res[i] === "k") {
      temp += "j";
    } else if (res[i] === "b") {
      temp += "x";
    } else if (res[i] === "u") {
      temp += "r";
    } else if (res[i] === "c") {
      temp += "q";
    } else if (res[i] === "v") {
      temp += "m";
    } else if (res[i] === ",") {
      temp += ",";
    } else if (res[i] === ".") {
      temp += ".";
    } else if (res[i] === " ") {
      temp += " ";
    } else {
      temp += res[i];
    }
  }
  console.log(temp);
}

chiper(
  "Oppo resmi merilis smartphone 5G terbarunya, Reno5 5G di Indonesia beberapa waktu lalu. Ponsel tersebut ditenagai dengan chipset Qualcomm Snapdragon 765G dan RAM 8 GB yang diklaim mampu menjalankan berbagai game 'berat'. Untuk membuktikan kebolehannya, KompasTekno sempat menjajal ponsel ini untuk memainkan delapan game yang terbilang cukup populer. Kami juga mengukur tempetarur ponsel yang memiliki skor AnTuTu (Versi 8) sebesar 360.000-an poin tersebut dengan termometer inframerah (gun) setelah dipakai bermain game. Secara garis besar, game-game yang diuji coba berjalan dengan baik di pengaturan grafis menengah hingga tertinggi alias 'rata kanan', dengan suhu bodi ponsel di kisaran 35 derajat Celcius yang masih tergolong normal. Namun, ada satu pengecualian ketika menjalankan game Genshin Impact. Apabila pengguna ingin menjalankan game ini dengan lancar, maka mereka lebih baik mengubah kualitas visual ke pengaturan terendah, bisa 'Low' atau 'Lowest'. Di aspek temperatur, suhu ponsel usai dipakai bermain game bikinan Mihoyo itu juga lebih tinggi dibanding tujuh game lainnya, yaitu nyaris mencapai 38 derajat Celcius. Pengguna bisa saja mengubah pengaturan grafis ke menengah atau tertinggi. Hanya saja, tampilan dan animasi mungkin akan sedikit patah-patah alias stuttering. Selain itu, suhu ponsel bisa saja lebih panas dari 38 derajat Celcius dan memengaruhi kinerja ponsel secara keseluruhan."
);

chiper("apa tidak oke kita babi utang cucu vagina ,.");
