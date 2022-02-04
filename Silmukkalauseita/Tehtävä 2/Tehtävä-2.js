function sort(){
  var sana = document.getElementById('sana').value;
  var salasana = "";

  for (var i = 0; i < sana.length; i++){
    salasana += sana[i] + "Ö";
  }
  document.getElementById('tulokset').textContent = salasana;
}

//(var i = 0) variable starts as 0.
//(i < sana.length) detects given variables length [code units].
//(i++)(sana[i] + "Ö") always adds a value["Ö"] in between given words[i] letters [kissa -> kÖiÖsÖsÖaÖ].
