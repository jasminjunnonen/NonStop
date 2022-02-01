function sort(){
  var num1 = parseInt(document.getElementById('numero').value);

  if (num1 < 16){
    document.getElementById('tulokset').innerHTML = ("Sinulla on lupa ajaa vain polkupyörää.");
  }
  else if (num1 > 17){
    document.getElementById('tulokset').innerHTML = ("Sinulla on lupa ajaa autoa.");
  }
  else{
    document.getElementById('tulokset').innerHTML = ("Sinulla on lupa ajaa mopoa.");
  }
}
