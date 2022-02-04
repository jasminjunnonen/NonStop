function sort(){
  var vastaus = "";

  for(var i = 1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
      vastaus += "HipHeijaa ";
    }
    else if(i % 3 == 0){
      vastaus += "Hip ";
    }
    else if(i % 5 == 0){
      vastaus += "Heijaa ";
    }
    else {
      vastaus += i + " ";
    }
    document.getElementById('tulokset').textContent = vastaus;
  }
}
