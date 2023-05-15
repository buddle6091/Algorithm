/* N % 2 == 0, A 와 B가 만나기 전까지 계속 승리, A, B < N 
A 혹은 B가 승리했을 때 홀수였다면 +1 후, /2번째 로 배정, 짝수 번째였다면, /2 번째로 배정
A - 1 = B 혹은 B - 1 = A이라면 종료. 라운드++ 된 것을 return

** 여기서 간과하면 안되는게, 참가자 번호가 (1, 2) 라면 okay 이지만 (2, 3) 이라면 안된다.
어떻게 매치업을 시작하면 좋을까..
*/

function solution(n, a, b) {
  let setA = +a;
  let setB = +b;
  let round = 1;
  let answer;

  /* a 와 b의 차이가 절대값 1이 될 때까지 && (1, 2), (3, 4)... etc 의 매치업인지
    여기서 setA와 setB를 오름차순으로 정렬을 한다. 만약에 가장 작은 수가 짝수라면...? 계속해서 루프를 돌고
    홀수가 나오게 되면 그대로 루프를 빠져나와 지금까지 누산된 round 값을 정답으로 return한다.
    */
  while (true) {
    if (Math.abs(setB - setA) == 1 && Math.min(setA, setB) % 2 == 1) break;

    if (setA % 2 === 0) {
      setA = setA / 2;
    } else {
      setA = (setA + 1) / 2;
    }

    if (setB % 2 === 0) {
      setB = setB / 2;
    } else {
      setB = (setB + 1) / 2;
    }

    console.log(setA, setB, round);
    round++;
  }

  return round;
}
