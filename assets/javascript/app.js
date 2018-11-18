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
                clearInterval(setIntervalID);
                checkAnswers();
            } 
            $("#info").html("<h2>Time Remaining: " + time + " seconds!</h2>")
            time--
        
        }
        $("#info").append("<h2>Time Remaining: " + time + " seconds!</h2>")

        

            
        var randomQuestionSet = 
        [[
            {question:"what is 7+7?",
            answers:[13,11,6,14],
            answer:"14"},

            {question:"The adult human skeleton is made of up how many bones?",
            answers:[200,183,286,206],
            answer:"206"} ,

            {question:"select the right answer!",
            answers:["the right answer","the wrong answer","the wrong answer","the wrong answer"],
            answer:"the right answer"} ,

            {question:"who is sponge bobs best friend?",
            answers:["squidward","patrick","plankton","mr.krab"],
            answer:"patrick"},

            {question:"Who is the fastest hero?",
            answers:["iron man","bat man","the flash", "captain america"],
            answer:"the flash"},

            {question:"what is 5+5?",
            answers:[10,4,6,2],
            answer:"10"} ,

            {question:"what color is spongebob?",
            answers:["black","blue","yellow","green"],
            answer:"yellow"} ,

            {question:"what color is patrick?",
            answers:["white","orange","blue","pink"],
            answer:"pink"} 
        ],   
        [
            {question:"what is 1+1?",
            answers:[1,2,3,4],
            answer:"2"},

            {question:"what color is an orange?",
            answers:["yellow","green","orange","black"],
            answer:"orange"} ,

            {question:"select the right answer!",
            answers:["the right answer","the wrong answer","the wrong answer","the wrong answer"],
            answer:"the right answer"} ,

            {question:"who is sponge bobs best friend?",
            answers:["squidward","patrick","plankton","mr.krab"],
            answer:"patrick"},

            {question:"Who is the fastest hero?",
            answers:["iron man","bat man","the flash", "captain america"],
            answer:"the flash"},

            {question:"what is 5+5?",
            answers:[10,4,6,2],
            answer:"10"} ,

            {question:"what color is spongebob?",
            answers:["black","blue","yellow","green"],
            answer:"yellow"} ,

            {question:"what color is patrick?",
            answers:["white","orange","blue","pink"],
            answer:"pink"} 
        ],   
        
        [
            {question:"what is 1+1?",
            answers:[1,2,3,4],
            answer:"2"},

            {question:"what color is an orange?",
            answers:["yellow","green","orange","black"],
            answer:"orange"} ,

            {question:"select the right answer!",
            answers:["the right answer","the wrong answer","the wrong answer","the wrong answer"],
            answer:"the right answer"} ,

            {question:"who is sponge bobs best friend?",
            answers:["squidward","patrick","plankton","mr.krab"],
            answer:"patrick"},

            {question:"Who is the fastest hero?",
            answers:["iron man","bat man","the flash", "captain america"],
            answer:"the flash"},

            {question:"what is 5+5?",
            answers:[10,4,6,2],
            answer:"10"} ,

            {question:"what color is spongebob?",
            answers:["black","blue","yellow","green"],
            answer:"yellow"} ,

            {question:"what color is patrick?",
            answers:["white","orange","blue","pink"],
            answer:"pink"} 
        ],   
        
        [
            {question:"what is 1+1?",
            answers:[1,2,3,4],
            answer:"2"},

            {question:"what color is an orange?",
            answers:["yellow","green","orange","black"],
            answer:"orange"} ,

            {question:"select the right answer!",
            answers:["the right answer","the wrong answer","the wrong answer","the wrong answer"],
            answer:"the right answer"} ,

            {question:"who is sponge bobs best friend?",
            answers:["squidward","patrick","plankton","mr.krab"],
            answer:"patrick"},

            {question:"Who is the fastest hero?",
            answers:["iron man","bat man","the flash", "captain america"],
            answer:"the flash"},

            {question:"what is 5+5?",
            answers:[10,4,6,2],
            answer:"10"} ,

            {question:"what color is spongebob?",
            answers:["black","blue","yellow","green"],
            answer:"yellow"} ,

            {question:"what color is patrick?",
            answers:["white","orange","blue","pink"],
            answer:"pink"} 
        ],   
        
        [
            {question:"what is 2+2?",
            answers:[6,7,9,4],
            answer:"4"},

            {question:"what color is an apple?",
            answers:["yellow","red","orange","black"],
            answer:"red"} ,

            {question:"select the wrong answer!",
            answers:["the right answer","the right answer","the wrong answer","the right answer"],
            answer:"the wrong answer"} ,

            {question:"who is sponge bobs best friend?",
            answers:["squidward","patrick","plankton","mr.krab"],
            answer:"patrick"},

            {question:"Who is the fastest hero?",
            answers:["iron man","bat man","the flash", "captain america"],
            answer:"the flash"},

            {question:"what is 5+5?",
            answers:[10,4,6,2],
            answer:"10"} ,

            {question:"what color is spongebob?",
            answers:["black","blue","yellow","green"],
            answer:"yellow"} ,

            {question:"what color is patrick?",
            answers:["white","orange","blue","pink"],
            answer:"pink"} 
        ]];

        var trivia = randomQuestionSet[Math.floor(Math.random()*5)]
        
        for (i=0; i<trivia.length;i++){
            var nextTrivia = $("<div class='container justify-content-center'>");

            var question = $("<div class='row justify-content-center'><h3>" + trivia[i].question+ "</h3></div>");

            nextTrivia.append(question);

            var answer1 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' value='"+ trivia[i].answers[0]+ "'>" + trivia[i].answers[0] + "</label>")
            var answer2 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' value='"+ trivia[i].answers[1]+ "'>" + trivia[i].answers[1] + "</label>")
            var answer3 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' value='"+ trivia[i].answers[2]+ "'>" + trivia[i].answers[2] + "</label>")
            var answer4 = $("<label class='buttonSpace'><input name='"+ trivia[i].question + "' type='radio' value='"+ trivia[i].answers[3]+ "'>" + trivia[i].answers[3] + "</label>")

            var options = $("<div class='row justify-content-center'>");
            options.append(answer1, answer2, answer3, answer4);
            nextTrivia.append(options);

            var rightAnswer = trivia[i].answer;
            
            $(".divYellow").append(nextTrivia);

        }

        

        var finishButton = $("<div class='row justify-content-center'><button class='btn-end' id='end'> finish </button></div>");

        $(".divYellow").append (finishButton);

        $("input").click(function(){
    

        })

        $("#end").click(function(){
            clearInterval(setIntervalID);
            checkAnswers();
        });
                
        

        function checkAnswers(){
            //grab radio input values and compare with correct answers 

            for (i=0; i<trivia.length; i++){
     
                var correctAnswer=trivia[i].answer;
                // console.log(correctAnswer);
                var checkHere=trivia[i].question;
                // console.log (checkHere);
                var yourAnswer=$("input[name='"+checkHere+"']:checked").val();
                console.log(yourAnswer);
                if (yourAnswer === undefined){
                    unanswered++;
                }
                else if (yourAnswer===correctAnswer){
                    correct++;
                }
                else if (yourAnswer!=correctAnswer && yourAnswer!= undefined){
                    incorrect++;
                }

            }
                
        
        




            //empty page
            $(".divYellow").empty();
            $(".divyellow").append("<h2>Correct answers: " + correct + "!</h2><br>");
            $(".divyellow").append("<h2>Wrong answers: " + incorrect + "!</h2><br>");
            $(".divyellow").append("<h2>Unanswered: " + unanswered + "!</h2><br>");
            $(".divyellow").append($("<button class='btn-size' id='playAgain'> Try Again </button>"));
            $("#playAgain").click(function(){
                location.reload();
            });

        
        
        }

        

    });

})
