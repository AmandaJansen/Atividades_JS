number = 0;
attempts = 0;

function LoadNumber(){
 number = parseInt(Math.random() * 100); //gera números aleátorios

 console.log(number);
}
 function FindNumber(){
  bet = document.getElementById('number').value; //pega o número inserido pelo usuario

  if(bet > 100 || bet < 1){ //Verica se o número é valido 
    alert('Número inválido');
  }
  if(bet > number){ //Verifica se o número é maior e retorna este alerta
  attempts++;
  document.getElementById('messange').innerHTML = 'O número a ser encontrado é menor'

 }else if(bet < number){ //Verifica se é menor e retorna este alerta
  attempts++;
  document.getElementById('messange').innerHTML = 'O número a ser encontrado é maior'

 }else{
 document.getElementById('messange').innerHTML = 'Parabéns! Você acertou '+ '<br>'+ ' foram ' + attempts + ' suas tentativas'
 
 }
}
LoadNumber(); //Mostra o número no console

