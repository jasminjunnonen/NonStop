function sort(){
  var num1 = parseInt(document.getElementById('numero').value);

  if (num1 == 1){
    document.getElementById('tulokset').innerHTML = ('Maanantai');
  }
  else if (num1 == 2){
    document.getElementById('tulokset').innerHTML = ('Tiistai');
  }
  else if (num1 == 3){
    document.getElementById('tulokset').innerHTML = ('Keskiviikko');
  }
  else if (num1 == 4){
    document.getElementById('tulokset').innerHTML = ('Torstai');
  }
  else if (num1 == 5){
    document.getElementById('tulokset').innerHTML = ('Perjantai');
  }
  else if (num1 == 6){
    document.getElementById('tulokset').innerHTML = ('Lauantai');
  }
  else if (num1 == 7){
    document.getElementById('tulokset').innerHTML = ('Sunnuntai');
  }
  else {
    document.getElementById('tulokset').innerHTML = ('Anna jokin numero 1 ja 7 välillä');
  }
}
