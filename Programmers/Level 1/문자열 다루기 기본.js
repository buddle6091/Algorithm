function solution(s) {
  // 문자열이 4 or 6 (||) & 숫자로만 되어있는 reg (/[0-9]/g) (합조건으로)
  //(s.length = 4 || 6).match(/[0-9]/g)
  // test를 쓰면 Boolean값으로 나옴. 단 정규식 문자열을 미리 만든 상태로
  const reg = /^\d{6}$|^\d{4}$/;
  return reg.test(s);
}
