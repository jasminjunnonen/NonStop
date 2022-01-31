function sort(){
  var num1 = parseInt(document.getElementById('numero').value);

  if (num1 < 16){
    alert("Sinulla on lupa ajaa vain polkupyörää.");
  }
  else if (num1 > 17){
    alert("Sinulla on lupa ajaa autoa.");
  }
  else{
    alert("Sinulla on lupa ajaa mopoa.");
  }
}
