function sort(){
  var num1 = parseInt(document.getElementById('numero1').value);
  var num2 = parseInt(document.getElementById('numero2').value);
  var numerotP="", summaP=0, numerotS="", summaS=0, numeroP, numeroS; //määrittää muuttujat.

  if(num1 % 2 == 0){ //jakautuuko kahdella?
    numeroP = num1;
  }
  else{
    numeroP = num1 + 1;
  }
  for(var i = numeroP; i <= num2; i += 2){ // i - oltava pienempi tai yhtäsuuri kuin num2.
    numerotP += i + " ";
    summaP += i;
  }
  if(num1 % 2 == 0){ //jakautuuko kahdella?
    numeroS = num1 + 1;
  }
  else {
    numeroS = num1;
  }
  for(var a = numeroS; a <= num2; a += 2){
    numerotS += a + " ";
    summaS += a;
  }
  document.getElementById('tulokset').innerHTML = "Parilliset luvut:  " + numerotP + " ja niiden summa: " + summaP + "<br/> Parittomat luvut: " + numerotS + " ja niiden summa: " + summaS;
}
