const rightLettersEL = document.getElementById('show-rightLetters');
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const wrongLettersEL = document.getElementById('wrongLetters')
const figureParts = document.querySelectorAll('.figurePart')
const finalMessage = document.getElementById('final-message')
const count_message = document.getElementById("count-message")
const btn = document.getElementById('btn')
const alphabetsEl = document.getElementById('alphabets') 
const alphabetChildren = alphabetsEl.children;

const alphabets =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];


const words = ['space', 'javascript', 'computer', 'wallet']
let figureLength = figureParts.length;
let selectedWord = words[Math.floor(Math.random()*words.length)];
const rightLetters = [];
const wrongLetters = [];

let playable = true;

function arrayAlphabet(){
	for(let i =0; i < alphabets.length; i++){
		const button = document.createElement('button');
		button.innerHTML = alphabets[i];
		button.value = alphabets[i];
		alphabetsEl.appendChild(button)

	}

	alphabetsEl.addEventListener('click', e =>{
		const alpahbet = e.target.value;

		console.log(alpahbet)
		if (selectedWord.includes(alpahbet)) {
			if (!rightLetters.includes(alpahbet)) {
				rightLetters.push(alpahbet);
				displayLetter();
			} else {
				showMessage();
			}
		} else {
			if (!wrongLetters.includes(alpahbet)) {
				wrongLetters.push(alpahbet);
				updateWrongLettersEl();
			} else {
				showMessage();
			}
		}
	})
}

function displayLetter(){

	rightLettersEL.innerHTML = '';

	selectedWord.split('').map(letter =>{
		const span = document.createElement('span');
		span.innerText = rightLetters.includes(letter) ? letter : '';

		span.classList.add('letter')
		rightLettersEL.appendChild(span)
	});

	const innerContent = rightLettersEL.innerText;

	if(selectedWord === innerContent){
		finalMessage.innerHTML = `
			<p>You win! 😎</p>
		`
		popup.style.display = 'flex';
	}
}

function updateWrongLettersEl(){
	wrongLettersEL.innerHTML = `
	${wrongLetters.length > 0 ? `<p>wrong</p>` : ''}
	${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}
 `;

 figureParts.forEach((part, index) => {
	 const wrongLength = wrongLetters.length;

	 if(index < wrongLength){
		 count_message.innerHTML = `<p>You have   
		 <span style = "color : yellow"> ${figureLength - wrongLetters.length} </span> more chances</p>`;
		  part.style.display = 'block';
	 }else{
		 part.style.display = 'none';
	 }
 })

 if(wrongLetters.length === figureParts.length){
	finalMessage.innerHTML = `
	 	 You lost every chance...😂</br>
		The answer is <span style = "color : yellow">${selectedWord}</span>
	 `;

	 popup.style.display ='flex';
	 playable = false;
 }
}

function showMessage(){
	notification.classList.add('show')

	setTimeout(()=>{
		notification.classList.remove('show')
	}, 2000)
}

window.addEventListener('keydown', e => {
	if(playable){
		if (e.keyCode >= 65 && e.keyCode <= 90) {
			const letter = e.key.toLowerCase();
			
			if (selectedWord.includes(letter)) {
				if (!rightLetters.includes(letter)) {
					rightLetters.push(letter);
					displayLetter();
				} else {
					showMessage();
				}
			} else {
				if (!wrongLetters.includes(letter)) {
					wrongLetters.push(letter);
					updateWrongLettersEl();
				} else {
					showMessage();
				}
			}
		}
	}
});

btn.addEventListener('click', () =>{
	
	playable = true;
	
	rightLetters.splice(0);
	wrongLetters.splice(0);

	selectedWord = words[Math.floor(Math.random() * words.length)];
	displayLetter();
	updateWrongLettersEl();

	popup.style.display = 'none';

});

arrayAlphabet();
displayLetter();