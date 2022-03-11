const caesarCipher = (string, n) => {
  let result = "";
  n = n > 25 ? Math.floor(n % 25) - 1 : n;
  for (let i = 0; i < string.length; i++) {
    const c = string.charCodeAt(i);
    if (string[i] == " ") {
      result += " ";
    } else if (c >= 65 && c <= 90) {
      n = n > 25 ? Math.floor(n / 65) - 1 : n;
      const res = c + n > 90 ? 65 + (c + n - 1) - 90 : c + n;
      result += String.fromCharCode(res);
    } else if (c >= 97 && c <= 122) {
      const res = c + n > 122 ? 97 + (c + n - 1) - 122 : c + n;
      result += String.fromCharCode(res);
    } else {
      return "Not valid string";
    }
  }
  return result;
};

console.log(caesarCipher("My name is John", 3));
console.log(caesarCipher("My name is John", 29));
console.log(caesarCipher("A", 30));
console.log(caesarCipher("a", 3));
