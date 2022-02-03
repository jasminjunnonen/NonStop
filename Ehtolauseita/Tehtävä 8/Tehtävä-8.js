function sort(){
  var num1 = (document.getElementById('numero').value);

  if ((0 == num1 % 4) && (0 != num1 % 100) || (0 == num1 % 400)){  //&&(and) ||(or)
    document.getElementById('tulokset').innerHTML = ('Vuosi on karkausvuosi');
  }
  else {
    document.getElementById('tulokset').innerHTML = ('Vuosi ei ole karkausvuosi');
  }
}
