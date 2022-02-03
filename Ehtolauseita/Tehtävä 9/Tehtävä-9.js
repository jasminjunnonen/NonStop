function sort(){
  var num1 = document.getElementById('numero1').value;
  var num2 = document.getElementById('numero2').value;
  var num3 = document.getElementById('numero3').value;
  var num4 = document.getElementById('numero4').value;
  var num5 = document.getElementById('numero5').value;
  summa = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt (num4) + parseInt(num5);
  keskiarvo = summa/5;  //'summa' numeroita on 5 joten ne kaikki yhteen jaetaan 5

  document.getElementById('tulokset').innerHTML = "Lukujen summa on:  " + summa + "<br/> Lukujen keskiarvo on:  " + keskiarvo;
};
