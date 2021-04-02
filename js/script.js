let randomNumber =
     Math.floor(Math.random() * 3 + 1);
   console.log('Wylosowana liczba to: '
   + randomNumber); 
let computerMove = getMoveName(randomNumber);
/*if(randomNumber == 1) { 
    computerMove = 'kamień';
 else if(randomNumber == 2) {
    computerMove = 'papier';
} else if(randomNumber == 3) {
    computerMove = 'nozyce'; */

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

   if(randomNumber == '1' && playerInput == '2') {
    printMessage('Ty wygrywasz')
    } else if(randomNumber == '2' && playerInput == '1') {
    printMessage('Komputer wygrywa')
    } else if(randomNumber == '3' && playerInput == '1') {
    printMessage('Ty wygrywasz')
    } else if(randomNumber == '1' && playerInput == '3') {
    printMessage('Komputer wygrywa')
    } else if(randomNumber == '2' && playerInput == '3') {
    printMessage('Ty wygrywasz')
    } else if(randomNumber == '3' && playerInput == '2') {
    printMessage('Komputer wygrywa')
    } else if(randomNumber == playerInput) {
    printMessage('Remis')
    } else if(playerMove == 'nieznany ruch') {
    printMessage ('Nieprawidlowy ruch')
    }