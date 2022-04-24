var qList = document.querySelector("#quiz");

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


function init(){
  for (var i = 0;i<quizList.length;i++)
    { 
      createBox(quizList[i].question,i);
    } 
}

function createBox(q,idname){ 
  var div = document.createElement("div");//element 
  div.textContent = idname + ' - ' + q + ' ?'; 
  div.setAttribute("id" , idname);
  div.setAttribute("class" , "card"); 
  qList.appendChild(div); 
} 

init();
