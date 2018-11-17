$( document ).ready(function(){

    $("#start").click(function(){
        $("#info").empty();
        var correct=0;
        var incorrect=0;
        var unanswered=0;
        var time=30; 
        setIntervalID=setInterval(timer, 1000);
        
        function timer(){
            if (time===0){
                clearInterval(setIntervalID)
            }
            $("#info").html("<h2>Time Remaining: " + time + " seconds!</h2>")
            time--
        }
        $("#info").append("<h2>Time Remaining: " + time + " seconds!</h2>")

        const trivia=[
            {question:"what is 1+1?",
            answers:[1,2,3,4],
            answer:2},

            {question:"what color is an orange?",
            answers:["yellow","green","orange","black"],
            answer:"orange"} ,

            {question:"select the right answer!",
            answers:["the right answer","the wrong answer","the wrong answer","the wrong answer"],
            answer:"the right answer"} ,

            {question:"who is sponge bob's best friend?",
            answers:["squidward","patrick","plankton","mr.krab"],
            answer:"patrick"},

            {question:"Who is the fastest hero?",
            answers:["iron man","bat man","the flash", "captain america"],
            answer:"the flash"},

            {question:"what is 5+5?",
            answers:[10,4,6,2],
            answer:10} ,

            {question:"what color is spongebob?",
            answers:["black","blue","yellow","green"],
            answer:"yellow"} ,

            {question:"what color is patrick?",
            answers:["white","orange","blue","pink"],
            answer:"pink"} 
        ]      
        for (i=0; i<trivia.length;i++){
            var nextTrivia = $("<div class='container justify-content-center'>");

            var question = $("<div class='row justify-content-center'><h3>" + trivia[i].question+ "</h3></div>");

            nextTrivia.append(question);

            var answer1 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' option='"+ trivia[i].answers[0]+ "'>" + trivia[i].answers[0] + "</label>")
            var answer2 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' option='"+ trivia[i].answers[1]+ "'>" + trivia[i].answers[1] + "</label>")
            var answer3 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' option='"+ trivia[i].answers[2]+ "'>" + trivia[i].answers[2] + "</label>")
            var answer4 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' option='"+ trivia[i].answers[3]+ "'>" + trivia[i].answers[3] + "</label>")

            var options = $("<div class='row justify-content-center'>")
            options.append(answer1, answer2, answer3, answer4);
            nextTrivia.append(options);

            var correct = trivia[i].answer;
            
            $(".divYellow").append(nextTrivia);

        }

    

        var finishButton = $("<div class='row justify-content-center'><button class='btn-end' id='end'> finish </button></div>");

        $(".divYellow").append (finishButton);

        $("#end").click(checkAnswers());
                
        if (time===0){
            checkAnswers();
        }    
       

        function checkAnswers(){
            //grab input values and compare with correct answers 
            //empty page
            //return results



    });














})
