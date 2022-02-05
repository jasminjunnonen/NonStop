function sort(){
  var vastaus = 0;

  for(var i = 1; i <=10; i++ ){
    vastaus += i;
  }
  document.getElementById('tulokset').textContent = vastaus;
}
