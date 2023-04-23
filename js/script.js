const buttons = document.querySelectorAll('button');
const screen = document.querySelector('p');
const OPERATORS = ['+','-','*','/'];
let num1 = '';
let num2 = '';
let op = '';
let secondNum = false;

buttons.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(`Button: ${e.target.textContent} Clicked`)
    findCommand(e.target.textContent);
  });
});

function findCommand(str){
  switch(str){
    case '=':
      evaluate();
      break;
    case 'Back':
      backspace();
      break;
    case 'C':
      clearScreen();
      break;
    default:
      typeToScreen(str);
  }
}

function evaluate(){
  let answer;
  switch(op){
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
    case '+':
      answer = +num1 + +num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
  }
  num1 = String(answer);
  num2 = '';
  op = '';
  secondNum = false;
  updateDisplay();
}

function backspace(){
  if(secondNum && num2 !==''){
    num2 = num2.slice(0,-1)
  }else if(op !==''){
    console.log("here");
    op='';
    secondNum = false;
  }else{
    num1 = num1.slice(0,-1);
  }
  updateDisplay();
}

function clearScreen(){
  num1 = '';
  num2 = '';
  op = '';
  secondNum = false;
  updateDisplay();
}

function typeToScreen(str){
  //check if num or operator
  //if operator readinto op
  //if operator already a thing overwrite it.
  //if num1 is not null read it into num1
  //else read into num2
  if (OPERATORS.includes(str) && num1 === ''){
    return;
  }else if(OPERATORS.includes(str)){
    op = str;
    secondNum = true;
  }else if(!secondNum){
    num1 += str;
  }else{
    num2 += str;
  }
  updateDisplay();
}

function updateDisplay(){
  screen.textContent = `${num1} ${op} ${num2}`;
}

//Press number/operation button -> number appears on screen
//If operator is pressed ensure previous entry was not also an operator
//press back -> number/operation is removed
//press clear -> clears screen
//press equals -> evaluate the expression on the screen