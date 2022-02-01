function sort(){
  var num1 = parseInt(document.getElementById('luku').value);

  if (num1 % 2){
    document.getElementById('tulokset').innerHTML = (num1 + " on pariton numero");
  }
  else{
    document.getElementById('tulokset').innerHTML = (num1 + " on parillinen numero");
  }
}
