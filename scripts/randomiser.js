//randomiser

function reAssign(object,num){
	object.getElementsByClassName('randomLink')[0].href='pages\\'+num+'\\'+num+'.html'
	object.getElementsByClassName('randomImage')[0].src='images\\'+num+'.png'

}

function randomise(){
	let objectList = document.getElementsByClassName('randomItem');
	let i;
	let choices=[];
	let randomNum;
	for (let i = objectList.length - 1; i >= 0; i--) {
		do{
			randomNum = Math.floor(Math.random() * 10);
			console.log(randomNum)
		}while(choices.includes(randomNum));
		choices[choices.length]=randomNum
		console.log(choices)
		reAssign(objectList[i], randomNum)
	}
}

let body = document.getElementById('body');
body.onload = randomise();