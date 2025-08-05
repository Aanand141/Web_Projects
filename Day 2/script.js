function computerChoice() {
  let randomnumber = Math.random() * 3;
  if (randomnumber <= 1) {
    return "Bat";
  } else if (randomnumber > 1 && randomnumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function win(playerChoice, compChoice) {
    if(compChoice=='Bat' && playerChoice=='Ball'){
        return 'Computer Wins';
    }
    else if(compChoice=='Ball' && playerChoice=='Stump'){
        return 'Computer Wins';
    }
    else if(compChoice=='Stump' && playerChoice=='Bat'){
        return 'Computer Wins';
    }
    else if(compChoice=='Ball' && playerChoice=='Bat'){
        return 'Player Wins';
    }
    else if(compChoice=='Stump' && playerChoice=='Ball'){
        return 'Player Wins';
    }
    else if(compChoice=='Bat' && playerChoice=='Stump'){
        return 'Player Wins';
    }
    else if(compChoice==playerChoice){
        return 'Draw';
    }
    else {
        return 'Invalid Choice';
    }
}

function displayResult(playerChoice) {
    const compChoice = computerChoice();
    const result = win(playerChoice, compChoice);
    document.getElementById('result').innerText = 
        `Player chose: ${playerChoice}, 
        Computer chose: ${compChoice},
         Result: ${result}`;
}
