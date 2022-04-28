
var qResult = document.querySelector("#result");
//--------------------adding the result test to the oage---------------------------------
function result(){
    var qRepeat = localStorage.getItem('qRepeat');
    var result = localStorage.getItem("quizAnswers");
    var username = localStorage.getItem("UserName");
    var emailAddress = localStorage.getItem("Email");

    var quizListlength = parseInt(localStorage.getItem('qLength'));
    quizListlength = quizListlength - result;
    if(result!=undefined){
            var r1 = document.createElement("h2");
            var r2 = document.createElement("h2");
            var r3 = document.createElement("h2");
            var r4 = document.createElement("h2");
            var r5 = document.createElement("h2");

            r1.textContent = "Dear " + username + " you had "+ result + " correct answers" + " and " + quizListlength + " Wrong Answers!";
            r2.textContent = "And you repeat this quiz " + qRepeat + " times"; 
            r4.textContent = "We have your email address in our record <" + emailAddress + "> and result is already sent to your email address!";
            r5.textContent = "If you want to try again please choose START OVER!"

            r1.setAttribute("class" , "check");
            r2.setAttribute("class" , "check");
            r4.setAttribute("class" , "check");
            r5.setAttribute("class" , "check");

            qResult.appendChild(r1);
            qResult.appendChild(r2);
            qResult.appendChild(r4);
            qResult.appendChild(r5);


        }
    }
  //-------------------------------------------------------------------------------