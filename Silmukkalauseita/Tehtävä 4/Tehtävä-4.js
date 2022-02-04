function sort(){
  var numero = document.getElementById('numero').value;
  var tulokset = 1;

  for(var i = 1; i <= numero; i++){
    tulokset *= i;
  }
  document.getElementById('tulokset').textContent = "Luvun " + numero + " kertoma on " + tulokset;
}
