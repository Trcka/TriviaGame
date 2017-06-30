var queryURL = "https://opentdb.com/api.php?amount=10&type=multiple"

var questions = [];
var answerRight;




$.ajax({
    url: queryURL,
    method: +"GET"
}).done(function(responce) {


    //scoping problems, need to make it global, so pushing the reponce to the object.

    questions = responce.results


    //need to add code here due to load times




    var i = 0;
    var a = 0;
    var b = 0;

    function renderQuestion() {

        $("#question").html("<p id='question'>" + questions[0 + i].question + "</p>");
        $("#ans1").html(questions[0 + i].correct_answer);
        $("#ans2").html(questions[0 + i].incorrect_answers[0]);
        $("#ans3").html(questions[0 + i].incorrect_answers[1]);
        $("#ans4").html(questions[0 + i].incorrect_answers[2]);
        setTimeout(function() {
            renderQuestion()

            i++
            b++


            if (i === 10) {
                $("#score").append("<h1>You got " + a + " Right!</h1>")
                $("#score").append("<h1> You got " + b + " Wrong.</h1>")
                $("#question").hide()
                $("button").hide()
                clearTimeout();
            }
        }, 10000)
    };




    renderQuestion();
    $("button").click(function(event) {

        i++


        if (i === 10) {
            $("#score").append("<h1>You got " + a + " Right!</h1>")
            $("#score").append("<h1> You got " + b + " Wrong.</h1>")
            $("#question").hide()
            $("button").hide()

        } else if ($(event.currentTarget).attr('id') === "ans1") {


            a++
            renderQuestion()

        } else {

            b++
            renderQuestion()
        };




    });




});
