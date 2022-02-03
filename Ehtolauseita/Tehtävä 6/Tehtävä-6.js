function sort(){
  var num1 = parseInt(document.getElementById('luku').value);

  if (num1 <= -1){
    document.getElementById('tulokset').innerHTML = (num1 + " on negatiivinen numero");
  }
  else if(num1 == 0){
    document.getElementById('tulokset').innerHTML = (num1 + " ei ole positiivinen eikä negatiivinen numero");
  }
  else{
    document.getElementById('tulokset').innerHTML = (num1 + " on positiivinen numero");
  }
}
