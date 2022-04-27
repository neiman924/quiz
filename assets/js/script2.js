
var qResult = document.querySelector("#result");
//-------------------------------------------------------------------------------
function result(){
    var result = localStorage.getItem("quizAnswers");
    var qRepeat = localStorage.getItem('qRepeat');
    var quizListlength = parseInt(localStorage.getItem('qLength'));
    quizListlength = quizListlength - result;
    if(result!=undefined){
            var r1 = document.createElement("div");//check answer 
            var r2 = document.createElement("div");//check answer 
            var r3 = document.createElement("div");//check answer 

            r1.textContent = result;
            r2.textContent = qRepeat;
            r3.textContent = quizListlength;

            r1.setAttribute("class" , "check");
            r2.setAttribute("class" , "check");
            r3.setAttribute("class" , "check");

            qResult.appendChild(r1);
            qResult.appendChild(r2);
            qResult.appendChild(r3);
        }
    }
  //-------------------------------------------------------------------------------