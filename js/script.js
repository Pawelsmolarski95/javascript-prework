
//definiowanie funckcji
function playGame(playerInput){

    function printMessage(msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    }

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        }
        if(argMoveId == 2) {
            return 'papier';
        }
        if(argMoveId == 3) {
            return 'nożyce'
        }

    }

    function displayResult(computerMove,playerMove) {

        if(computerMove == 'kamień' && playerMove == 'papier') {
            return 'Wygrywasz'
        }
        
        if(computerMove == 'kamień' && playerMove == 'kamień') {
            return 'Remis'
        }
        if(computerMove == 'kamień' && playerMove == 'nożyce') {
            return 'Przegrywasz'
        }
        if(computerMove == 'papier' && playerMove == 'papier') {
            return 'Remis'
        }
        if(computerMove == 'papier' && playerMove == 'kamień') {
            return 'Przegrywasz'
        }
        if(computerMove == 'papier' && playerMove == 'nożyce') {
            return 'Wygrywasz'
        }
        if(computerMove == 'nożyce' && playerMove == 'papier') {
            return 'Przegrywasz'
        }
        if(computerMove == 'nożyce' && playerMove == 'kamień') {
            return 'Wygrywasz'
        }
        if(computerMove == 'nożyce' && playerMove == 'nożyce') {
            return 'Wygrywasz'
        }
    }
    //losowanie numeru przez komputer

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    console.log(computerMove);
    
    clearMessages();


    // wybieranie numeru przez gracza

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    console.log(playerMove);


    console.log('Twój ruch to: ' + playerMove);

    // wynik gry


    let showResult = displayResult(playerMove, computerMove)


    printMessage(showResult);

}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1)
});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2)
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3)
});

 
