let randomNumber =
     Math.floor(Math.random() * 3 + 1);
   console.log('Wylosowana liczba to: '
   + randomNumber); 
let computerMove = getMoveName(randomNumber);

function getMoveName(numberofmove) {
if(numberofmove == 1) { 
    return 'kamień';
} else if(numberofmove == 2) {
    return 'papier';
} else if(numberofmove == 3) {
    return 'nożyce';
} else {
    return 'nieznany ruch';
}
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');
   console.log('Gracz wpisał: ' + playerInput);

   let playerMove = getMoveName(playerInput);

   DisplayResult(computerMove,playerMove)

function DisplayResult(argComputerMove,argPlayerMove) {
   printMessage('Mój ruch to: ' +
   argComputerMove);

   printMessage('Twój ruch to: ' +
   argPlayerMove);

   if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz')
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Komputer wygrywa')
    } else if(argComputerMove== 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz')
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Komputer wygrywa')
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz')
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Komputer wygrywa')
    } else if(argComputerMove == argPlayerMove) {
    printMessage('Remis')
    } else if(argPlayerMove == 'nieznany ruch') {
    printMessage ('Nieprawidlowy ruch')
    }
}