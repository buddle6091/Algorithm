/* 전제 1. 직사각형은 아무리 많아도 변의 길이의 가지수는 최대 2가지 조건의 수밖에 존재할 수 없음. (정사각형도 직사각형 범주에 포함.) 
   전제 2. 3가지 좌표가 주어졌을대 답은 하나밖에 나올 수 없음.
   전제 3. 각 변은 X축, Y축에 평행하기에 다각선으로 도형이 만들어지지 않음. => X1 == X2 or Y1 == Y2 형식으로 비교하면 됨

   1. 2차원 배열에서 각 배열들의 0번째 인덱스 크기 순으로 정렬하여 비교.
   2. X좌표로 들어갈 수 있는 2가지의 수, Y좌표로 들어갈 수 있는 2가지 수의 조합을 생각하면 됨. 
   3. (X1, Y1), (X1, Y2), (X2, Y1)이 주어졌다면, result에 올 수 있는 값은 [X2, Y2]
*/

function solution(v) {
  // 2차원 배열을 1차원으로 풀어버려보자. (with spread)
  const newArray = v.reduce(function (acc, cur) {
    return [...acc, ...cur];
  });

  // 0, 2, 4번째 인덱스가 x좌표, 1, 3, 5번째 인덱스틑 y좌표.
  const xArray = [newArray[0], newArray[2], newArray[4]];
  const yArray = [newArray[1], newArray[3], newArray[5]];

  // 중복이 아닌 값을 찾아주는 함수를 생성
  function findOdd(arr) {
    var count = {};
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      count[item] = (count[item] || 0) + 1;

      if (count[item] === 2 && duplicates.indexOf(item) === -1) {
        duplicates.push(item);
      }
    }

    return arr.filter((x) => x != duplicates).toString();
  }

  const answer = [+findOdd(xArray), +findOdd(yArray)];

  return answer;
}
