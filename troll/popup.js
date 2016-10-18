function hello() {
	var audio = new Audio('ROASTED.mp3');
	audio.play();
	console.log("hi");
};
function saem() {
	var audio = new Audio('memes.mp3');
	audio.play();
	console.log("hi");
};
function why() {
	var audio = new Audio('microsoft.mp3');
	audio.play();

	console.log("win");
};

document.getElementById('franku').addEventListener('click', hello);
document.getElementById('hey').addEventListener('click', saem);
document.getElementById('win').addEventListener('click', why);