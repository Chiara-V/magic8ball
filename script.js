$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams"];
	$("#answer").hide();

magic8Ball.askQuestion = function (question)
{
	$("#answer").fadeIn(4000);
	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	var randomNumber = Math.random ();
	var randomAnswerArray =randomNumber *this.listOfAnswers.length;
	var randomIndex = Math.floor(randomAnswerArray);
	var randomAnswer = this.listOfAnswers[randomIndex];
	console.log (question);
	console.log (randomAnswer);
	$("#answer").text(randomAnswer);

} ;

	var onClick = function () {
		$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
       function() {
           var question = prompt("Ask a yes or no question");
      magic8Ball.askQuestion(question);
       }, 500);
		magic8Ball.askQuestion(question);

	};
	$("#questionButton").click(onClick);

});
