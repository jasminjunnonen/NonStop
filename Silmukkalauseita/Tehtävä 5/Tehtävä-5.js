function sort(){
  var vastaus = "";

  for(var i = 1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){   //jos luku on jaollinen 3 ja 5 niin...
      vastaus += "HipHeijaa ";      //Tulostaa luvun ja 'HipHeijaa' sen viereen
    }
    else if(i % 3 == 0){    //jos luku on jaollinen 3 niin...
      vastaus += "Hip ";    //Tulostaa luvun ja 'Hip' sen viereen
    }
    else if(i % 5 == 0){      //jos luku on jaollinen 5 niin...
      vastaus += "Heijaa ";   // Tulostaa luvun ja 'Heijaa' sen viereen
    }
    else {
      vastaus += i + " ";   //Jos luku ei ole jaollinen 3 tai 5 niin tulostaa vain luvun.
    }
    document.getElementById('tulokset').textContent = vastaus;
  }
}
