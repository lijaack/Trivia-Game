$( document ).ready(function(){

    $("#start").click(function(){
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











    });














})
