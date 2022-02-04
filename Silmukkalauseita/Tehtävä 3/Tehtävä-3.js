function sort(){
  var sana = document.getElementById('sana').value;

  for (var i = 0; i < sana.length; i++){
    if (sana[i] == 'Ö' || sana[i] == 'ö'){
      document.getElementById('tulokset').textContent = "Sanassa on Ö-kirjain";
    }
    else{
      document.getElementById('tulokset').textContent = "Sanassa ei ole Ö-kirjainta";
    }
  }
}
