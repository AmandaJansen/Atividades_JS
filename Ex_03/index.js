function calcular() {
 let num1 = Number(document.getElementById('num-one').value)
 let num2 = Number(document.getElementById('num-two').value)
 let total = 0;

if(document.getElementById('op-soma').checked)
  total = num1 + num2

else if(document.getElementById('op-sub').checked)
  total = num1 - num2 

else if(document.getElementById('op-mult').checked)
  total = num1 * num2

else
  total = num1 / num2

  console.log(total)
  document.getElementById('result').innerHTML  =  'Resultado: ' + String(total);

}