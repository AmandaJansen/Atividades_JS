celsius = document.getElementById('celsius');
fahrenheit = document.getElementById('fahrenheit');

function CelparaFar(){
var c = celsius.value;
var f = (c * 1.8) + 32
fahrenheit.value = f;

}
function FarparaCel(){
  var f = fahrenheit.value;
  var c = (f - 32) / 1.8;
  celsius.value = c;
}
