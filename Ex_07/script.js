function tabuada(){
   numero = Number(document.getElementById('numero').value);
   res = Number(document.getElementById('resultado'));
  var tabuada;


  
  if(numero == 0){
    alert('Informe um número');
  }else{
    for (i=1; i <= 10; i++) {
      res = numero + " x " + i + " = "  + numero * i;
    
    
      console.log(res);
      

document.getElementById('resultado').innerHTML += "<br>"  + res;


  }



  }

}