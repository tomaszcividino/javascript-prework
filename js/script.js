{ 
    const playGame = function(playerInput) {
        clearMessages();      
        const randomNumber = Math.floor(Math.random() * 3 + 1); 
        const getMoveName = function(numberOfMove) {
            if(numberOfMove == 1) { 
                return 'kamień';
            } else if(numberOfMove == 2) {
                return 'papier';
            } else if(numberOfMove == 3) {
                return 'nożyce';
            } else {
                return 'nieznany ruch';
            }
        }
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);
        const displayResult = function(argComputerMove, argPlayerMove) {
            printMessage('Mój ruch to: ' + argComputerMove);
            printMessage('Twoj ruch to: ' + argPlayerMove);
            if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz');
            } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Komputer wygrywa');
            } else if(argComputerMove== 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz');
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Komputer wygrywa');
            } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz');
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                printMessage('Komputer wygrywa');
            } else if(argComputerMove == argPlayerMove) {
                printMessage('Remis');
            } else if(argPlayerMove == 'nieznany ruch') {
                printMessage ('Nieprawidlowy ruch');
            }
        }
        displayResult(computerMove, playerMove);
    }
    document.getElementById('play-scissors').addEventListener('click', function () {
        printMessage('Twoj ruch to nożyce');
        playGame('3');
    });
    document.getElementById('play-rock').addEventListener('click', function () {
        printMessage('Twoj ruch to kamień');
        playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        printMessage('Twoj ruch to papier');
        playGame('2');
    });
}
