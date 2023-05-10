/* 1. 이진 탐색 (재귀 함수) */
const binarySearch = (arr, target, start, end) => {
  if (start > end) return -1;

  let mid = parseInt((start + end) / 2);
  // 찾았다면, 중간점 인덱스 반환 (절반을 뜯어야하니까)
  if (arr[mid] == target) return mid;
  // 중간점의 값보다 찾고자 하는 값이작은 경우 왼쪽을 확인
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽
  else return binarySearch(arr, target, mid + 1, end);
};

// n (원소의 개수), target (찾고자 하는 값)
let n = 10;
let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15];

// 이진 탐색 수행 결과 출력

let result = binarySearch(arr, target, 0, n - 1);
if (result == -1) console.log("원소가 존재하지 않습니다.");
else console.log(`${result + 1}번째 원소입니다`);
