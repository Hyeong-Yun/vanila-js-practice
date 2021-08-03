const gameBtn = document.querySelectorAll('.btn')
const container = document.querySelector('.container');

const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

  const gameResult = {
    time: 10,
    score: 0,
    plusTime: 0
}

let selectedWord = words[Math.floor(Math.random() * words.length)]

let flag = true;

let initTemplate = `
<h1 id = "title">Choose one difficulty</h1>
    
<div class="wrapper">
<button class = "btn" id = "easy-btn">
    <span>Easy</span>
</button class = "btn">

<button class = "btn" id = "midium-btn">
    <span>Midium</span>
</button>

<button  class = "btn" id = "hard-btn">
    <span>Hard</span>
</button>
</div>
`

let template = `
<p class="word">${selectedWord}</p>

<input id = "hello" type="text" />

<div class="showing-game">
    <div class="time-left-container">
    <span>time left</span>
        <span id = "time-left">${gameResult.time}</span>
    </div>

    <div class="score-container">
    <span>score</span>
        <span id = "score">${gameResult.score}</span>
    </div>
</div>

`;

function updateResult(){
    gameResult.score++;
    gameResult.time += gameResult.plusTime;
    selectedWord = words[Math.floor(Math.random() * words.length)]

    const time_left = document.getElementById('time-left');
    const score = document.getElementById('score');
    const word = document.getElementById('score');

    word.innerHTML = selectedWord;
    time_left.innerHTML =gameResult.time;
    score.innerHTML = gameResult.score;
}

function inputImplement(){
    const input = document.getElementById('hello');

    window.addEventListener('input', e =>{
        const letter = e.target.value;
        console.log(letter)

        if(letter === selectedWord){
            updateResult();
            input.value = '';
        }
    })
}
function showidsplay(){
    container.innerHTML = template;
    inputImplement();
}
//button 실행
gameBtn[0].addEventListener('click', e=>{
    flag = false;
    showidsplay();
    gameResult.plusTime = 5;
})

gameBtn[1].addEventListener('click', e=>{
    e.preventDefault();
    flag = false;
      showidsplay();
    gameResult.plusTime = 4;
})

gameBtn[2].addEventListener('click', e=>{
    flag = false;
    showidsplay();
    gameResult.plusTime = 2;
})