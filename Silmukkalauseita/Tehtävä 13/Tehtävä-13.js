function sort(min, max){
  var lotto;
  var numerot = [];
  for(var i = 0; i < 7; i++){
    lotto = Math.floor(Math.random()*40 + 1); //Lottonumerot menevät 40 asti ja +1 koska numero ei voi olla 0.
    numerot[i] = " " + lotto;
  }
  document.getElementById('tulokset').textContent = numerot;
}
