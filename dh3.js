/*
KeyPoints: deps를 구하는 공식을 DFS와 BFS 알고리즘을 통하여 해결하면 될 듯 + 이거 리눅스 터미널로 생각하면 편함
root : deps를 카운트 하지 않음. 그 다음부터 deps++

** argv가 문자열로 이루어진 배열이다.
mkdir, cd, del은 명령어 + 공백 + 폴더 혹은 ..(이전) =>문자열을 split(" ")으로 찢어져서 판
*/

function solution(argv) {
    let deps = 0;
    //forder들을 생성 후 기억할 수 있게 넣어주자.
    let folders = [];

    /* root에서 하위 폴더가 생성되었다면 deps++ 
    오류가 발생하지 않는 입력만 한다고 가정했으니, 첫번째 입력은 무조건 폴더를 생성해야 함 */
    if(argv[0] == `mkdir ${argv[0].split(" ")[1]}` && deps == 0){
       deps++;
       folders.push(argv[0].split(" ")[1]);
    }

    for (let i = 1; i < argv.length; i++){
        if(argv[i] == `mkdir ${argv[i].split(" ")[1]}`){
       folders.push(argv[i].split(" ")[1]);
    }
    /* cd를 통해 폴더에 접근했을 때 할 수 있는 경우의 수
    1. mkdir를 통하여 하위 폴더를 생성하고 deps++ (이전 다른 하위 노드들과 비교했을 때, 동일선상 혹은 이상일 때)
    2. del을 통해 현재 폴더 삭제
    3. move를 통하여 현재폴더 및 그 하위 폴더들을 .split("")[2] 밑에다가 붙이기 + deps의 변화 유무 확인
     */
        if (argv[i] == `cd ${argv[i].split(" ")[1]}`) {
            if(argv[i] == `cd`
        }
    }

    console.log(deps, folders);
    //return deps;
}