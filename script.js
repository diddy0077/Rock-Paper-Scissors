let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let usersChoice = document.getElementById('user-choice');
let computerChoice = document.getElementById('computer-choice');
let result = document.getElementById('result');
let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let uScore = document.getElementById('user-score')
let cScore = document.getElementById('computer-score')
let tie = document.getElementById('tie')
let computerArray = ['rock', 'paper', 'scissors']
let savedUserScore = localStorage.getItem("userScore");
let savedTieScore = localStorage.getItem('tieScore')
let savedComputerScore = localStorage.getItem('computerScore')
// Load sound effects
const clickSound = new Audio('click.mp3');
const resetSound = new Audio('reset.mp3');
if(savedUserScore) {
  userScore = Number(savedUserScore);
  uScore.textContent = userScore;
} 
if(savedTieScore) {
  tieScore = Number(savedTieScore);
  tie.textContent = tieScore;
}
if(savedComputerScore) {
  computerScore = Number(savedComputerScore);
  cScore.textContent = computerScore
}


rockBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  playGame('rock');
});
paperBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  playGame('paper');
});
scissorsBtn.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
  playGame('scissors');
});


function playGame(userChoice) {
  let randomChoice = Math.floor(Math.random() * computerArray.length);
  randomChoice = computerArray[randomChoice];
  console.log(randomChoice) 
  if(userChoice === randomChoice) {
    result.textContent = `Tie!`;
    result.style.color = 'Gray'
    tieScore++;
    tie.textContent = tieScore;
    tie.classList.add('pop');
    setTimeout(() => tie.classList.remove('pop'), 300);
    localStorage.setItem('tieScore', tieScore);
  } else if(userChoice === 'rock') {
    if(randomChoice === 'scissors') {
      result.textContent = `You win!`
      result.style.color = 'Green'
      userScore++
      uScore.textContent = userScore;
      uScore.classList.add('pop');
      setTimeout(() => uScore.classList.remove('pop'), 300);
      localStorage.setItem('userScore', userScore);
    } else if(randomChoice === 'paper') {
      result.textContent = `You lose!`
      result.style.color = 'Red'
      computerScore++
      localStorage.setItem('computerScore', computerScore);
      cScore.classList.add('pop');
      setTimeout(() => cScore.classList.remove('pop'), 300);
      cScore.textContent = computerScore;
    }
  } else if(userChoice === 'paper') {
    if(randomChoice === 'rock') {
      result.textContent = `You win!`
      result.style.color = 'Green'
      userScore++
      uScore.textContent = userScore;
      uScore.classList.add('pop');
      setTimeout(() => uScore.classList.remove('pop'), 300);
      localStorage.setItem('userScore', userScore);
    } else if(randomChoice === 'scissors') {
      result.textContent = `You lose!`
      result.style.color = 'Red'
      computerScore++
      cScore.textContent = computerScore;
      cScore.classList.add('pop');
      setTimeout(() => cScore.classList.remove('pop'), 300);
      localStorage.setItem('computerScore', computerScore);
    }
  } else if(userChoice === 'scissors') {
     if(randomChoice === 'paper') {
      result.textContent = `You win!`
      result.style.color = 'Green'
      userScore++
      uScore.textContent = userScore;
      uScore.classList.add('pop');
      setTimeout(() => uScore.classList.remove('pop'), 300);
      localStorage.setItem('userScore', userScore);
    } else if(randomChoice === 'rock') {
      result.textContent = `You lose!`
      result.style.color = 'Red'
      computerScore++
      cScore.textContent = computerScore;
      cScore.classList.add('pop');
      setTimeout(() => cScore.classList.remove('pop'), 300);
      localStorage.setItem('computerScore', computerScore);
    }
  } 
    // Create image element for user
let userImg = document.createElement('img');
userImg.src = `${userChoice}.png`;
userImg.alt = userChoice;
userImg.width = 60;

// Replace user-choice content with image
usersChoice.innerHTML = ''; // clear any old content
usersChoice.appendChild(userImg);

// Create image element for computer
let computerImg = document.createElement('img');
computerImg.src = `${randomChoice}.png`;
computerImg.alt = randomChoice;
computerImg.width = 60;

// Replace computer-choice content with image
computerChoice.innerHTML = '';
computerChoice.appendChild(computerImg);
}
let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  cScore.textContent = 0;
  uScore.textContent = 0;
  tie.textContent = 0;
  result.textContent = '-'
  usersChoice.textContent = '-';
  computerChoice.textContent = '-'
  localStorage.clear()
   resetSound.currentTime = 0;
  resetSound.play();
})

