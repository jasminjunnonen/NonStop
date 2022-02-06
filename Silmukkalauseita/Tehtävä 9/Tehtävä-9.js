function sort(){
  var numerot = [], num;
  for (var x = 0; x < 5; x++){
    num = document.getElementById('numero['+x+']').value;
    num = parseInt(num);
    numerot.push(num);
  }
  numerot = numerot.sort((a, b) => a-b);
  document.getElementById('tulokset').innerHTML = "Pienin luku: " + numerot[0] + "<br/> Suurin luku on: " + numerot[numerot.length-1];
}
