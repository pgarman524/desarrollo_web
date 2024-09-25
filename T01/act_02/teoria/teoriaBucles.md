if (n1 > n2)
{
alert ("Mayor");
}else {
    alert {"Mmenor};
}

// Muestra "Mayor"



<!DOCTYPE html>
<html>
<body>
<p>Haz click para recorrer las propiedades del objeto.</p>
<button onclick="myFunction()">Click</button>
<p id="demo"></p>
<script>
function myFunction() {
  var persona = {nombre:"Juan", apellido:"Gallego", edad:39};
  var text = "";
  var x;
  //Contiene el nombre de la propiedad en el for in
  for (x in persona) {
    text += persona[x] + " ";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>
</body>
</html>