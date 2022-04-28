var qList = document.querySelector("#quiz");
var qCheck = document.querySelector("#check");
var qResult = document.querySelector("#result");
var quizAnswers;
var timer;
var timerCount;
var btn1,btn2,btn3,btn4;
//---------------------quiz list object---------------------------------------------
var quizList = [{
  question: 'Which of the following is correct about features of JavaScript',
  a1: 'JavaScript is a lightweight, interpreted programming language.',
  a2: 'JavaScript is designed for creating network-centric applications.',
  a3: 'JavaScript is complementary to and integrated with Java.',
  a4: 'All of the above.',
  ca: 'All of the above.'
},
{
  question: 'Which built-in method returns the character at the specified index',
  a1: 'characterAt()',
  a2: 'getCharAt()',
  a3: 'charAt()',
  a4: 'None of the above.',
  ca: 'charAt()'
},
{
  question: 'Which built-in method reverses the order of the elements of an array',
  a1: 'changeOrder(order)',
  a2: 'reverse()',
  a3: 'sort(order)',
  a4: 'None of the above.',
  ca: 'reverse()'
},
{
  question: 'Which of the following function of String object returns the character at the specified index',
  a1: 'charAt()',
  a2: 'charCodeAt()',
  a3: 'concat()',
  a4: 'indexOf()',
  ca: 'charAt()'
},
{
  question: 'Which of the following function of String object is used to match a regular expression against a string',
  a1: 'concat()',
  a2: 'match()',
  a3: 'search()',
  a4: 'replace()',
  ca: 'match()'
},
{
  question: 'Which of the following function of String object returns the calling string value converted to upper case',
  a1: 'toLocaleUpperCase()',
  a2: 'toUpperCase()',
  a3: 'toString()',
  a4: 'substring()',
  ca: 'toUpperCase()'
},
{
  question: 'Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag',
  a1: 'link()',
  a2: 'small()',
  a3: 'sup()',
  a4: 'sub()',
  ca: 'small()'
},
{
  question: 'Which of the following function of Array object removes the last element from an array and returns that element',
  a1: 'pop()',
  a2: 'push()',
  a3: 'join()',
  a4: 'map()',
  ca: 'pop()'
},
{
  question: 'Which of the following function of Array object extracts a section of an array and returns a new array',
  a1: 'reverse()',
  a2: 'shift()',
  a3: 'slice()',
  a4: 'some()',
  ca: 'slice()'
}];
localStorage.setItem("qLength", quizList.length);
//---------------------the function runing the quiz----------------------------
function init(){

  startTimer();
  var i = localStorage.getItem("i");;
  if(i === undefined){
    i = 0;
  }else if (i >= quizList.length){
    endQuiz();
  }
  createBox(quizList[i].question,quizList[i].a1,quizList[i].a2,quizList[i].a3,quizList[i].a4,quizList[i].ca,i);
  btn1.addEventListener("click", function(){
    if (i < quizList.length) {
//----------adding to the correct answers localstorage-----------------------
      if(quizList[i].a1 === quizList[i].ca){
        quizAnswers = parseInt(localStorage.getItem("quizAnswers"));
        quizAnswers += 1;
        localStorage.setItem("quizAnswers", quizAnswers);
      }else{
        alert("incorect!")
        timerCount = parseInt(localStorage.getItem('timerCount'));
        timerCount = timerCount - 20;
        localStorage.setItem('timerCount',timerCount);
        var width = parseInt(localStorage.getItem("barwidth"));
        width += 10;
        localStorage.setItem("barwidth" , width);
      }
//    i is coming from local storage

      window.location.href = "quiz.html";
      createBox(quizList[i].question,quizList[i].a1,quizList[i].a2,quizList[i].a3,quizList[i].a4,quizList[i].ca,i);
      i++;
      localStorage.setItem("i", i);
    }
 });
 btn2.addEventListener("click", function(){
  if (i < quizList.length) {
//----------adding to the correct answers localstorage-----------------------
      if(quizList[i].a2 === quizList[i].ca){
        quizAnswers = parseInt(localStorage.getItem("quizAnswers"));
        quizAnswers += 1;
        localStorage.setItem("quizAnswers", quizAnswers);
      }else{
        alert("incorect!")
        timerCount = parseInt(localStorage.getItem('timerCount'));
        timerCount = timerCount - 20;
        localStorage.setItem('timerCount',timerCount);
        var width = parseInt(localStorage.getItem("barwidth"));
        width += 10;
        localStorage.setItem("barwidth" , width);
      }
//    i is coming from local storage
    window.location.href = "quiz.html";
    createBox(quizList[i].question,quizList[i].a1,quizList[i].a2,quizList[i].a3,quizList[i].a4,quizList[i].ca,i);
    i++;
    localStorage.setItem("i", i);
  }
});
btn3.addEventListener("click", function(){
  if (i < quizList.length) {
//----------adding to the correct answers localstorage-----------------------
    if(quizList[i].a3 === quizList[i].ca){
        quizAnswers = parseInt(localStorage.getItem("quizAnswers"));
        quizAnswers += 1;
        localStorage.setItem("quizAnswers", quizAnswers);
      }else{
        alert("incorect!")
        timerCount = parseInt(localStorage.getItem('timerCount'));
        timerCount = timerCount - 20;
        localStorage.setItem('timerCount',timerCount);
        var width = parseInt(localStorage.getItem("barwidth"));
        width += 10;
        localStorage.setItem("barwidth" , width);
      }
//    i is coming from local storage
    window.location.href = "quiz.html";
    createBox(quizList[i].question,quizList[i].a1,quizList[i].a2,quizList[i].a3,quizList[i].a4,quizList[i].ca,i);
    i++;
    localStorage.setItem("i", i);
  }
});
btn4.addEventListener("click", function(){
  if (i < quizList.length) {
    //----------adding to the correct answers localstorage-----------------------
    if(quizList[i].a4 === quizList[i].ca){
      quizAnswers = parseInt(localStorage.getItem("quizAnswers"));
      quizAnswers += 1;
      localStorage.setItem("quizAnswers", quizAnswers);
    }else{
      alert("incorect!")
      timerCount = parseInt(localStorage.getItem('timerCount'));
      timerCount = timerCount - 20;
      localStorage.setItem('timerCount',timerCount);
      var width = parseInt(localStorage.getItem("barwidth"));
      width += 10;
      localStorage.setItem("barwidth" , width);
    }
//    i is coming from local storage
    window.location.href = "quiz.html";
    createBox(quizList[i].question,quizList[i].a1,quizList[i].a2,quizList[i].a3,quizList[i].a4,quizList[i].ca,i);
    i++;
    localStorage.setItem("i", i);
  }
});
}
//-------------------------------------------------------------------------------
function createBox(q,a1,a2,a3,a4,ca,idname){ 
  var div = document.createElement("div");//element 
  var check = document.createElement("p");//check answer 
  check.textContent = "Correct";
  check.setAttribute("class" , "check");

  div.textContent = q + ' ?'; 
  div.setAttribute("id" , idname);
  div.setAttribute("class" , "card"); 
  qList.appendChild(div); 

  btn1 = document.createElement("button");
    btn1.setAttribute("class" , "button"); 
  btn2 = document.createElement("button");
    btn2.setAttribute("class" , "button"); 
  btn3 = document.createElement("button");
    btn3.setAttribute("class" , "button"); 
  btn4 = document.createElement("button");
    btn4.setAttribute("class" , "button"); 

  btn1.innerHTML = a1;
  btn1.type = "submit";
  btn1.name = a1;
  btn1.id = 'button';

  div.append(btn1);

  btn2.innerHTML = a2;
  btn2.type = "submit";
  btn2.name = a2;
  btn2.id = 'button';

  div.append(btn2);

  btn3.innerHTML = a3;
  btn3.type = "submit";
  btn3.name = a3;
  btn3.id = 'button';

  div.append(btn3);

  btn4.innerHTML = a4;
  btn4.type = "submit";
  btn4.name = a4;
  btn4.id = 'button';

  div.append(btn4);
  document.addEventListener("click", function() {
    console.log("test");
  })
} 
//-------------------------------------------------------------------------------
function startTimer() {
  timerCount = localStorage.getItem('timerCount');
  if (timerCount === undefined) {
    timerCount = 500;
  }
  move();
  timer = setInterval(function() {
    timerCount--;
    if (timerCount > 1) {
      timerCount--;
      localStorage.setItem('timerCount', timerCount);
    } else if (timerCount === 1) {
      timerCount--;
      localStorage.setItem('timerCount', timerCount);
    } else {
        clearInterval(timer);
        endQuiz();
    }
  }, 1000);
}
//----------------------redirectiong to result function-------------------------
function endQuiz() {
  window.location.href = "result.html";
}
//------------------------time bar function--------------------------------------
var iBar = 0;
function move() {
  if (iBar == 0) {
    iBar = 1;
    var elem = document.getElementById("myBar");
    var width = localStorage.getItem("barwidth");
    if (width === undefined){
      width = 1;
    }
    var id = setInterval(frame, 2500);
    function frame() {
      if (width >= 2500) {
        clearInterval(id);
        iBar = 0;
      } else {
        width++;
        localStorage.setItem("barwidth" , width);
        elem.style.width = width + "%";
      }
    }
  }
}
//-------------------------------------------------------------------------------
function result(){
  var result = JSON.parse(localStorage.getItem("quizAnswers"));

  if(result!=undefined){
      for (var i = 0;i<result.length;i++){
          alert("test" + result);
          var r1 = document.createElement("div");//check answer 
          r1.textContent = result[i];
          r1.setAttribute("class" , "check");
          qResult.appendChild(r1);
      }
  }
}
//-------------------------------------------------------------------------------
init();