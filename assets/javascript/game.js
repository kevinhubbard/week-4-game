var wins = 0;
var losses = 0;
var score = 0;
var crystalValue = [];


$(document).ready(function() {

	function randNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}	//returns a random number between a specified min and max


	var goal = randNum(19, 120);//stores a random goal number
	console.log(goal);
	$('#goal').append(goal);//print goal to page


	for (var i = 0; i <= 3; i++) {
		crystalValue[i] = randNum(1, 12);
		console.log(crystalValue[i]);
	}	//creates 4 random numbers and stores them in a crystals array



	$('#btn1').click(function() {
		var btn = crystalValue[0];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

	$('#btn2').click(function() {
		var btn = crystalValue[1];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

	$('#btn3').click(function() {
		var btn = crystalValue[2];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

	$('#btn4').click(function() {
		var btn = crystalValue[3];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

console.log('the current score is ' + score);

/*	if (score === goal){
		console.log('you won nigga');
		wins++;
		$('#w').html(wins);

	}	*/

}); 