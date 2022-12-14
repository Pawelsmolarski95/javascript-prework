
{

    function playGame(playerInput){
      clearMessages();
  
      const getMoveName = function(argMoveId){
          if(argMoveId == 1){
            return 'kamień';
          } else if(argMoveId == 2) {
              return 'papier';
          } else if(argMoveId == 3) {
              return 'nożyce';
          } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
          }
        }
  
      const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
      const playerMove = getMoveName(playerInput);  
      printMessage('Mój ruch to: ' + computerMove);
      printMessage('Twój ruch to: ' + playerMove);
  
      const displayResult = function (argComputerMove, argPlayerMove){
          if ((argComputerMove == 'kamień' && argPlayerMove == 'papier')
              ||(argComputerMove == 'papier' && argPlayerMove == 'kamień')
              ||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
              printMessage('Ty wygrywasz!');
              playerScore++;
              }else if(argComputerMove == argPlayerMove) {
              printMessage('Remis!');
              }else {
              printMessage('Ja wygrywam!');
              computerScore++;
              }
          }
  
      displayResult(playerMove,computerMove)
      printMessageWins ('Twój wynik: ' + playerScore);
      printMessageWins ('Mój wynik: ' + computerScore);
    }
  
  
    document.getElementById('play-rock').addEventListener('click', function(){
      playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
      playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
      playGame(3);
    });
  
    let playerScore = 0;
    let computerScore = 0;
  }