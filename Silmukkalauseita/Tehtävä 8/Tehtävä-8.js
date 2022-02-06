function sort(){
  var num1 = document.getElementById('numero1').value;
  var num2 = document.getElementById('numero2').value;
  var vastaukset = num1;

  for(var i = 1; i < num2; i++){
    vastaukset *= num1;   //luku kerrotaan itsellään
//  vastaukset = vastaukset * num1;
  }
  document.getElementById('tulokset').textContent = vastaukset;
}

//(vastaukset *= num1) ja (vastaukset = vastaukset * num1) ovat sama.
//Potenssissa luku lasketaan itsellään niin monta kertaa kuin potenssi käskee. Esim: 10 potenssiin 3 = 10 × 10 × 10 = 1000
