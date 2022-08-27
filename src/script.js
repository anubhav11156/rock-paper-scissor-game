// Rock-Paper-Scissor Game -- You vs Ccdomputer
// Using Math.random() and Math.floor() and javascript DOM

// First Select the elements
const rock = document.getElementById('rock-id');
const paper = document.getElementById('paper-id');
const scissor = document.getElementById('scissor-id');
const computerIcon = document.getElementById('computer-icon');
const text = document.getElementById('text');

// This count is to ensure that r-p-s button are only clicked once in one round.
let count = 0;
text.innerHTML = '- - -';

/* Make choices for Computer
  a[0] = rock; a[1] = paper; a[2] : scissor
*/
const computerChoiceAraray = ['rock','paper','scissor'];

// Computer autmatically choose from the array
let computerChoice = (array) => {
  let choice = Math.floor(Math.random()*array.length);
  if(choice==0){
    computerIcon.src = '../public/images/main-rock.png';
  }
  else if (choice==1) {
    computerIcon.src = '../public/images/main-paper.png';
  }
  else {
    computerIcon.src = '../public/images/main-scissor.png';
  }

  return array[choice];
}

// passes the value of button you clicked to the main fucntion
const fooRock = () => {
  count++
  if(count>1){
    alert("You need to reset to start a new game :)")
    return;
  }
  let value = rock.value;
  rock.style.border = '3.5px solid rgba(255, 255, 255, 0.88)';
  main(value);
}

// passes the value of button you clicked to the main fucntion
const fooPaper = () => {
  count++
  if(count>1){
    alert("You need to reset to start a new game :)")
    return;
  }
  let value = paper.value;
  paper.style.border = '3.5px solid white';
  main(value);
}

// passes the value of button you clicked to the main fucntion
const fooScissor = () => {
  count++
  if(count>1){
    alert("You need to reset to start a new game :)")
    return;
  }
  let value = scissor.value;
  scissor.style.border = '3.5px solid rgba(255, 255, 255, 0.88)';
  main(value);
}

/*
-> Win condition for user :-
   (i)    user: rock; cpu: scissor
   (ii)   user: scissor; cpu: paper
   (iii)  user: paper; cpu: rock

-> Draw condition :-
   When both have same choice i.e userChoice==cpuChoice

-> Lost condition for user :-
   Any other thing than win and draw condition makes the use lose the game.
*/

/*
This is the driving Function
This will also invoke computerChoice()
*/

const main = (userChoice) => {
  console.log('user choice: ' +userChoice);
  let cpuChoice = computerChoice(computerChoiceAraray);
  console.log('cpu choice: ' +cpuChoice);

  // now the conditionals
  if(
     ( (userChoice=='rock')&&(cpuChoice=='scissor') ) ||
     ( (userChoice=='scissor')&&(cpuChoice=='paper') ) ||
     ( (userChoice=='paper')&&(cpuChoice=='rock') )
   ) { youWin(); }

  else if (userChoice==cpuChoice) {
    { draw(); }
  }
  else {
    youLose();
  }
}

const youWin = () => {
  text.innerHTML = 'You Won! :)';
}
const draw = () => {
    text.innerHTML = 'Match Draw :/';
}
const youLose = () => {
  text.innerHTML = 'You Lost! :(';
}

let reset = () => {
  computerIcon.src = '../public/images/main-all.png';
  count = 0;
  rock.style.border = 'none';
  paper.style.border = 'none';
  scissor.style.border = 'none';
  text.innerHTML = '- - -';
}
