// alert("HELLO!")

// Array of correct answers 
var answers 		= ['3' , 'Friends', 'Stranger Things', 'X-Men: Apocalypse', 'Beyonce', 'Simone Biles', 'Rio, Brazil', 'Fifth Harmony', 'Captain Jack', 'Suicide Squad']



//user answers arrays 
var userAnswers 	= [];

// Scores 
var correctCount 	= 0;
var wrongCount 		= 0;
var unassweredCount = 0;

// time counter 
var seconds 		= 120


$(document).ready(function() {

	// start the game with hidden Divs
	$("#game_container").hide();
	$("#end_container").hide();


	$("#start_button").on("click", function(){

		// Hide the start div from the user
		$("#start_container").hide();


		// Show the Game div
		$("#game_container").show();

		// timer();
		// return;

	});

// ======================
var timer = setInterval(function(){
	seconds--;
  // console.log(seconds)
},1000) 	

$("#timer-counter").html("Time Remaining: " + seconds);



// TIMER WORKS IF YOU CONSOLE LOG - HOWEVER, IT DOESNT DISPLAY ON THE SCREEN
// ======================




// =====================
// WHEN SUBMIT BUTTON IS CLICK IS SHOULD DISPLAY THE END_CONTAINER WHICH SHOWS ALL THE ASNWERED, UNANSWERED, AND TOTAL SCORE
// If the user answered all questions before the timer runs out 
$("#submit").on("click", function(){

	seconds = 0;
	$("#game_container").hide();
	$("#end_container").show();

});

// The timer runs out before user can finish the game 
if(seconds === -1){


	timeUp();


	// hides the q&a div from user when the time runs out 
	$("#game_container").hide();
	console.log(hide);
}


// EACH QUESTION SHOULD BE CHECKED IF ITS CORRECT OR NOT
// AT THE END OF THE GAME THE DIV WITH THE CORRECT ANSWERS, UNCORRECT ANSWERS, AND TOTAL SCORE SHOULD BE DISPLAYED 
// THE GAME SHOULD RESTART AFTER EACH GAME - MAYBE ADD A RESTART BUTTON 



});

