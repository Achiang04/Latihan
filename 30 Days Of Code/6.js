function processData(input) {
  //Enter your code here
  let ganjil = "";
  let genap = "";

  const temp = input.split("\n");
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length > 2) {
      for (let j = 0; j < temp[i].length; j++) {
        if (j % 2 === 0) {
          genap += temp[i][j];
        } else {
          ganjil += temp[i][j];
        }
      }
      console.log(genap, ganjil);
      genap = "";
      ganjil = "";
    } else {
      null;
    }
  }
}

processData("2\nHacker\nRank");
processData(
  "10\novyvzvptyvpvpxyztlrztsrztztqvrxtxuxq\nholtm\nuvzxrumuztyqyvpnji\ntmruzxzuwoskqysxztuvosuyrswrnmtxvzsrqwytzrxpltrwusxupw\nwxstwxuzuyuvyzrsxysxyuvyqxuxyskqwsyqumqrvopvowqumnvrxpwqpwsrnvrztxrxpvuxunvyzvupvupowvyzvzuzwvsrwv\nyrzxrxskrtlpwpmtpxvowrxrpxq\npryumtuntmovpwvowslj\nnosklrxrtyuxtmnurzsryuxtywqwqpxts\nfmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury\njkmsxzwrxzy"
);
// oyzpyppytrtrttvxxx vvvtvvxzlzszzqrtuq
// hlm ot
// uzrmzyypj vxuutqvni
// trzzwsqszuourwntvsqyzxlruxp muxuokyxtvsysrmxzrwtrptwsuw
// wswuuuyrxsyvquykwyuqvpoqmvxwpsnrtrpuuvzuvpwyvuwsw xtxzyvzsyxuyxxsqsqmrovwunrpqwrvzxxvxnyvpuovzzzvrv
// yzrsrlwmpvwxpq rxxktpptxorrx
// pymutopvwl rutnmvwosj
// nslxtutnrsyxyqqxs okrryxmuzrutwwpt
// fpzvwrvuqzyomxxvypzpuqtwyyznxyptsotuquy msyqxtpwsvvtssuzvwrmxwsvttsuurvyquzrxr
// jmxwxy kszrz
