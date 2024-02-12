function rollDie() {
  var rollResult = Math.floor(Math.random() * 6) + 1;
  return rollResult; 
}

function displayDice(){
  var resultElement = document.getElementById("result1");
  var resultElement2 = document.getElementById("result2");

  var rollresult = rollDie();
  var rollresult2 = rollDie();
  
  resultElement.
  resultElement2.textContent = "" + rollresult2;
}

window.onload = displayDice();
