function solution(s) {
  // 정규식 (정규식으로 대소문자 무시), match (그 정규식 조건이랑 맞는 걸 찾기)
  // fillter().length (match 한 데이터를 바탕으로 걸러내어 문자열 길이로 비교)
  //return s.toLowerCase().match(/p/g).filter(x => x != "").length ==
  //s.toLowerCase().match(/y/g).filter(y => y != "").length ? true : false;

  // 2. split과 toLowerCase로 하면 - > 빈 공간 계산
  //return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length

  return s.trim().match(/p/gi).length == s.trim().match(/y/gi).length;
}
