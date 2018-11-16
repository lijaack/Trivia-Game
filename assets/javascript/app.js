$( document ).ready(function(){

    $("#start").click(function(){
        $("#info").empty();
        var correct=0;
        var incorrect=0;
        var unanswered=0;
        var time=30; 
        setIntervalID=setInterval(timer, 1000);
        var trivia=[
            {question:"hells123dfo?",
            answers:[1,2,3,4],
            answer:3},

            {question:"hell4sdfo?",
            answers:[1,2,3,4],
            answer:3} ,

            {question:"hellsdfo?",
            answers:[1,2,3,4],
            answer:3} ,

            {question:"helsd543flo?",
            answers:[1,2,3,4],
            answer:3},

            {question:"helsd345flo?",
            answers:[1,2,3,4],
            answer:3},

            {question:"helsdf345lo?",
            answers:[1,2,3,4],
            answer:3} ,

            {question:"helldfso123?",
            answers:[1,2,3,4],
            answer:3} ,

            {question:"helasdflo?123",
            answers:[1,2,3,4],
            answer:3} 
        ]      
        for (i=0; i<trivia.length;i++){
            console.log(trivia[i].question)
        }




        function timer(){
            if (time===0){
                clearInterval(setIntervalID)
            }
            $("#info").html("<h2>Time Remaining: " + time + " seconds!</h2>")
            time--
        }
    

        $("#info").append("<h2>Time Remaining: " + time + " seconds!</h2>")











    });














})
