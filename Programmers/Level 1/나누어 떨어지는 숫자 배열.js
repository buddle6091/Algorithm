function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((x) => x % divisor == 0);
  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer.sort(function (a, b) {
    return a - b;
  });
}
