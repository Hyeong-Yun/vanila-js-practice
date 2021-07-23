
function solution(p) {
    var answer = '';
    if(p === '') return p;
    let cnt =0;
    let u, v;
    
    const pLen = p.length;
    for(let i =0; i< pLen; i++){
        p[i] === '('? cnt++ : cnt--;
        if(cnt === 0){
            u = p.slice(0, i+1);
            v = p.slice(i+1);
            break;
        }
    }

    const uLen = u.length;
    for(let i =0; i < uLen; i++){
        u[i] === "(" ? cnt++ : cnt--;

        if(cnt < 0){
            let str = '';
            
        }
    }
    return answer;
}

console.log(solution('()))((()'))