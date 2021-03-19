function reverseString(s) {
  let temp = "";
  for (let i = s.length - 1; i >= 0; i--) {
    temp += s[i];
  }
  console.log(temp);
}

reverseString("asep"); //pesa
reverseString("ucup"); //pucu
