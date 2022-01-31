function sort(){
  var num1 = parseInt(document.getElementById('numero1').value);
  var num2 = parseInt(document.getElementById('numero2').value);
  var num3 = parseInt(document.getElementById('numero3').value);
  var num4 = parseInt(document.getElementById('numero4').value);
  var num5 = parseInt(document.getElementById('numero5').value);

  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    alert("Suurin luku:  " + num1);
  }
  else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    alert("Suurin luku:  " + num2);
  }
  else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    alert("Suurin luku:  " + num3);
  }
  else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    alert("Suurin luku:  " + num4);
  }
  else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
    alert("Suurin luku:  " + num5);
  }
}
