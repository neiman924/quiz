// localStorage.removeItem('scoreBoard');

//-----------------------------------------------------------------------------------
var qResult = document.querySelector("#result");
var tempData;


var qRepeat = 1;
var reSult = localStorage.getItem("quizAnswers");
var username = localStorage.getItem("UserName");
var emailAddress = localStorage.getItem("Email");
var n1User = username;
var hScore = reSult;
//----------------------player list object-------------------------------------------
var scoreBoard = {playername: username,score: reSult,repeatFrequent: qRepeat};
//----------------------

var tempscoreBoard = localStorage.getItem('scoreBoard');
console.log('tempscoreBoard'+tempscoreBoard)
if (tempscoreBoard == undefined){

    console.log("tempData.lengh is undefined");
    localStorage.setItem('scoreBoard',JSON.stringify([scoreBoard]));
    tempData = [];
}else{
    console.log("tempData.lengh is not undefined");
    tempData = JSON.parse(localStorage.getItem('scoreBoard'));
}
//--------------------------------------------------------------------------------------
console.log('scoreBoard',scoreBoard)
console.log('tempdata',tempData,'tempdatalenghth');
//--------------------adding the result test to the oage---------------------------------
function result(){

    scoreBoardCheck();

    for (var key in tempData){
        console.log("score for loop",tempData[key].playername,tempData[key].score,tempData[key].repeatFrequent);
        if(tempData[key].score > hScore){
            n1User = tempData[key].playername;
            hScore = tempData[key].score;
        }
    }

    console.log("test = ",JSON.parse(localStorage.getItem('scoreBoard')));
    console.log("highscore",n1User,hScore);

//---------------------------page information---------------------------------------
    var quizListlength = parseInt(localStorage.getItem('qLength'));
    quizListlength = quizListlength - reSult;
    if(reSult!=undefined){
            var r1 = document.createElement("h2");
            var r2 = document.createElement("h2");
            var r3 = document.createElement("h2");
            var r4 = document.createElement("h2");
            var r5 = document.createElement("h2");
            var r6 = document.createElement("h2");

            r1.textContent = "Dear " + username + " you had "+ reSult + " correct answers" + " and " + quizListlength + " Wrong Answers!";
            r2.textContent = "And you repeat this quiz " + qRepeat + " times"; 
            r4.textContent = "We have your email address in our record <" + emailAddress + "> and result is already sent to your email address!";
            r5.textContent = "If you want to try again please choose START OVER!";
            r6.textContent = "The highest score is for " + n1User + " and his score is : " + hScore ;

            r1.setAttribute("class" , "check");
            r2.setAttribute("class" , "check");
            r4.setAttribute("class" , "check");
            r5.setAttribute("class" , "check");
            r6.setAttribute("class" , "check");
                        

            qResult.appendChild(r1);
            if(qRepeat!=0) qResult.appendChild(r2);
            qResult.appendChild(r4);
            qResult.appendChild(r5);
            qResult.appendChild(r6);
        }
    }
  //-------------------------------------------------------------------------------
  function scoreBoardCheck(){
      console.log("i want to see what");
    var userFind = -1;
    console.log('tempdata = ',tempData);
    for (var data in tempData)
    {
        var gamedata = tempData[data];
        console.log('username = ',gamedata);
        if(gamedata.playername == username){
            userFind = data;
        }
    }
    console.log('userfind', userFind);
    if(userFind>-1){
        console.log('playername if check !!!')
        qRepeat = parseInt(tempData[userFind].repeatFrequent) + 1;
        tempData[userFind].repeatFrequent = qRepeat;
        if(tempData[userFind].score < reSult) tempData[userFind].score = reSult;
     }else{
        console.log('else if check !!!')
        tempData.push(scoreBoard);
    }
    localStorage.setItem('scoreBoard',JSON.stringify(tempData));
}