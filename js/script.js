const buttons = document.querySelectorAll('button');
const screen = document.querySelector('p');
const OPERATORS = ['+','-','*','/'];

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
}

function backspace(){
  return screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
}

function clearScreen(){
  screen.textContent = '';
}

function typeToScreen(str){
  if (screen.textContent.length > 0){
    if (OPERATORS.includes(str) && OPERATORS.includes(screen.textContent[screen.textContent.length - 1])){
      console.log(screen.textContent[screen.length-1])
      screen.textContent = backspace();
    }
  }
  screen.textContent += str;
}

//Press number/operation button -> number appears on screen
//If operator is pressed ensure previous entry was not also an operator
//press back -> number/operation is removed
//press clear -> clears screen
//press equals -> evaluate the expression on the screen