//randomiser v2
function load(){
	let data = JSON.parse(pages)
	let i=0
	choice=Math.floor(Math.random()*(data.pages.length))
	console.log(choice,i)
	while(choice!=3&&i<=50){
		i++
		choice=Math.floor(Math.random()*(data.pages.length))
		console.log(choice,i)
	}
}