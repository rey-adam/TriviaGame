// alert("HELLO!")

// Array of correct answers 
var answers = ['3' , 'Friends', 'Stranger Things', 'X-Men: Apocalypse', 'Beyonce', 'Simone Biles', 'Rio, Brazil', 'Fifth Harmony', 'Captain Jack', 'Suicide Squad']



//user answers arrays 
var userAnswers = [];


$(document).ready(function() {

	// Intialize the game with hidden Divs
	$("#game_container").hide();
	$("#end_container").hide();


	$("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#start_container").hide();


		// Show the Game Div
		$("#game_container").show();

		// timer();
		// return;

	});


	// time counter 
var seconds = 120

var timer = setInterval(function(){
	seconds--;
  // console.log(seconds)
},1000) 	

$("#timer-counter").html("Time Remaining: " + seconds);






//user answers arrays 
var userAnswers = [];
var numQuestions = 10;
	for (var i = 0; i < numQuestions; i++) {
	$("#submit").on("click", function(event) {
			event.preventDefault();
		var selValue = $('input[name=q'+(i+1)+']:checked').val();
		// console.log(selValue);
		userAnswers.push(selValue);


console.log(answers);
	console.log(userAnswers);
	});
	



	};
});
// Variables

// Functions 

// Scores

// change HTML to reflect changes 

// main process on click
