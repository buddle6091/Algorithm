function solution(a, b) {
  var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var answer = new Date(`2016-${a}-${b}`);
  var x = answer.getDay();

  return day[x];
}
