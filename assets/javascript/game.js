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


//crystal 1 button click function
	$('#btn1').click(function() {
		var btn = crystalValue[0];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

//crystal 2 button click function
	$('#btn2').click(function() {
		var btn = crystalValue[1];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

//crystal 3 button click function
	$('#btn3').click(function() {
		var btn = crystalValue[2];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});

//crystal 4 button click function
	$('#btn4').click(function() {
		var btn = crystalValue[3];
		score += btn;
		$('#currentScore').html(score);
		console.log(score);
	});





	$('#tstbtn').click(function () {
		console.log('your score is:' + typeof(score)+ score);
		console.log('your goal is: ' + typeof(goal)+ goal);
	})
}); 