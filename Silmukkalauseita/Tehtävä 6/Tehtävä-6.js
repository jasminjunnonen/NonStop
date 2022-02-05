function sort(){
  var vastaus = "";

  for(var i = 1; i <=10; i++){
    vastaus += i + " ";
  }
  document.getElementById('tulokset').textContent = vastaus;
}
