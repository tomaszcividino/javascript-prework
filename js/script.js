let computerInput =
     Math.floor(Math.random() * 3 + 1);
   console.log('Wylosowana liczba to: '
   + computerInput); 
let computerMove = 'nieznany ruch';
if(computerInput == 1) { 
    computerMove = 'kamień';
} else if(computerInput == 2) {
    computerMove = 'papier';
} else if(computerInput == 3) {
    computerMove = 'nozyce';
}
   printMessage('Mój ruch to: ' +
   computerMove);

   let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
   console.log('Gracz wpisał: ' + playerInput);
   let playerMove = 'nieznany ruch';
   if(playerInput == '1'){
    playerMove = 'kamień';
   } else if(playerInput == 2) {
       playerMove = 'papier';
   } else if(playerInput == 3) {
       playerMove = 'nozyce';
   }
   printMessage('Twój ruch to: ' +
   playerMove);

   if(computerInput == '1' && playerInput == '2') {
    printMessage('Ty wygrywasz')
    } else if(computerInput == '2' && playerInput == '1') {
    printMessage('Komputer wygrywa')
    } else if(computerInput == '3' && playerInput == '1') {
    printMessage('Ty wygrywasz')
    } else if(computerInput == '1' && playerInput == '3') {
    printMessage('Komputer wygrywa')
    } else if(computerInput == '2' && playerInput == '3') {
    printMessage('Ty wygrywasz')
    } else if(computerInput == '3' && playerInput == '2') {
    printMessage('Komputer wygrywa')
    } else if(computerInput == playerInput) {
    printMessage('Remis')
    } else if(playerMove == 'nieznany ruch') {
    printMessage ('Nieprawidlowy ruch')
    }