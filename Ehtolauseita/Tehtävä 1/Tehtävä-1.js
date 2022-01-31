function sort(){
  var num1 = parseInt(document.getElementById('numero1').value);
  var num2 = parseInt(document.getElementById('numero2').value);
  var num3 = parseInt(document.getElementById('numero3').value);

  if (num1 < num2 && num1 < num3 && num2 < num3){
    alert(num1 + ' , ' + num2 + ' , ' + num3);
  }
  else if (num3 < num1 && num3 < num2 && num2 < num1){
    alert(num3 + ' , ' + num2 + ' , ' + num1);
  }
  else if (num2 < num1 && num2 < num3 && num1 < num3){
    alert(num2 + ' , ' + num1 + ' , ' + num3);
  }
  else if (num1 < num3 && num1 < num2 && num3 < num2){
    alert(num1 + ' , ' + num3 + ' , ' + num2);
  }
  else if (num2 < num3 && num2 < num1 && num3 < num1){
    alert(num2 + ' , ' + num3 + ' , ' + num1);
  }
  else if (num3 < num1 && num3 < num2 && num1 < num2){
    alert(num3 + ' , ' + num1 + ' , ' + num2);
  }
 }

 
