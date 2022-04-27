
var qResult = document.querySelector("#result");
// var wrongAnswer = document.querySelector("#wrongAnswers");
// var quizRepeat = document.querySelector("#quizRepeat");


//-------------------------------------------------------------------------------
function result(){
    var result = localStorage.getItem("quizAnswers");
    var qRepeat = localStorage.getItem('qRepeat');
    var quizListlength = parseInt(localStorage.getItem('qLength'));
    quizListlength = quizListlength - result;
    if(result!=undefined){
            var r1 = document.createElement("h2");//check answer 
            var r2 = document.createElement("h2");//check answer 
            var r3 = document.createElement("h2");//check answer 

            r1.textContent = "Correct answers : " + result + "   "  + "Quiz Repeat : " + qRepeat + "   " + "Wrong Answers : " + quizListlength;
            // r2.textContent = qRepeat;
            // r3.textContent = quizListlength;

            r1.setAttribute("class" , "check");
            // r2.setAttribute("class" , "check");
            // r3.setAttribute("class" , "check");

            qResult.appendChild(r1);
            // wrongAnswer.appendChild(r2);
            // qResult.appendChild(r1);
        }
    }
  //-------------------------------------------------------------------------------