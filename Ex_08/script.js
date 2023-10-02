function palinVerific(){
  texto = document.getElementById('frase').value;
  palavra = texto.split('').reverse().join('');
  resposta = document.getElementById('resposta').value;
  
if(texto === palavra){
  document.getElementById('resposta').innerHTML = 'É um palíndromo'

}else{
  document.getElementById('resposta').innerHTML = 'Não é um palíndromo'
 
}

}

