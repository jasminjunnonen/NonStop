function sort(){
  var pakka = []; //tyhjä array
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var numkir = ['A', 'J', 'Q', 'K', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  var mol = 0;

  //korttipakan tekeminen
  for(var a = 0; a < maat.length; a++){ //maakuville
    for(var b = 0; b < numkir.length; b++){ //numeroille ja kirjaimille
      if(a == maat.length-1 && b == numkir.length-1){
        pakka[mol] = maat[a] + numkir[b];
      }
      else{
        pakka[mol] = maat[a] + numkir[b];
        mol++;
      }
    }
  }
  kortit = []; //tyhjä array
  for(c = 0; c < 5; c++){ //kortteja näytetään 5
    math = pakka[Math.floor(Math.random()*52)]; //hakee randomit kortit.
    kortit[c] = " " + math;
  }
  document.getElementById('tulokset').innerHTML = kortit; //tulostaa kortit
}
