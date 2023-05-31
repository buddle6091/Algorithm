function solution(s) {
  let result = "";

  for (let word of s.split(" ")) {
    for (let i in word) {
      result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
    }
    result += " ";
  }

  return result.slice(0, -1);
}
