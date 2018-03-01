var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "How many dragons does Daenerys Targaryen have in the show Game of Thrones?",
  answers: ["2", "3", "4", "5"],
  correctAnswer: "3"
}, {
  question: "Which popular 1990s TV series that ran from 1994-2004 featured characters named Rachel, Monica, Phoebe, Joey, Chandler, and Ross?",
  answers: ["Will and Grace", "Two and a Half Men", "Friends", "The Office"],
  correctAnswer: "Friends"
}, {
  question: "Which Netflix Original series has a character named Eleven?",
  answers: ["The Ranch", "OA", "The Defenders", "Stranger Things"],
  correctAnswer: "Stranger Things"
}, {
  question: "Which X-Men film was released in 2016?",
  answers: ["X-Men: Days of Future Past", "X-Men: First Class", "X-Men: The Last Stand", "X-Men: Apocalypse"],
  correctAnswer: "X-Men: Apocalypse"
}, {
  question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King"
}, {
  question: "Who does Johnny Depp play in the Pirates of the Caribbean films?",
  answers: ["Captain Jack Sparrow", "Will Turner", "Joshamee Gibbs", "Captain Armando"],
  correctAnswer: "Captain Jack Sparrow"
}, {
  question: "Deadshot, Harley Quinn and Rick Flag are all characters in which 2016 film",
  answers: ["Batman Vs Superman", "Star Trek Beyond", "Suicide Squad", "Captain America: Civil War"],
  correctAnswer: "Suicide Squad"
}, {
  question: "What is Drake's last name",
  answers: ["Graham", "Brooks", "Carter", "Walter"],
  correctAnswer: "Graham"
}, {
    question: "Emma Watson is known for playing which character in Harry Potter?",
    answers: ["Arabella Figg", "Hermione Granger", "Minerva McGonagall", "Dolores Umbridge"],
    correctAnswer: "Hermione Granger"
}, {
    question: "Bruce Banner turns into what fictional superhero when he becomes angry?",
    answers: ["Superman", "SpiderMan", "Iron Man", "The Hulk"],
    correctAnswer: "The Hulk"
  },];
// Variable that will hold the setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});