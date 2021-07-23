function solution(p) {
  var answer = '';
  if(p === ''){
    return p;
  }  

  const wlen = p.length;
  let u, v;
  let cnt = 0;

  for(let i = 0;i < wlen; i++){
    p[i] === '('? cnt++:cnt--;
    if(cnt == 0){
      u = p.slice(0, i+1)
      v = p.slice()
    }
  }


  return answer;
}