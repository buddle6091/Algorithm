/* 값이 특정 범위에 속하는 원소의 개수 구할 방향 2가지 */

// Binary.js 함수 참조

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동
    else start = mid + 1;
  }
  return end;
};

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반

const upperBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid; // 최대한 오른쪽으로 이동
    else start = mid + 1;
  }
  return end;
};

/* 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산하는 함수 */

const countByRange = (arr, leftValue, rightValue) => {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
};

let arr = [1, 2, 3, 3, 3, 4, 6, 8];

// 만약 값이 3인 데이터의 개수를 알고싶다..?
console.log(countByRange(arr, 3, 3));
// 범위를 지정한다면
console.log(countByRange(arr, 1, 3));
