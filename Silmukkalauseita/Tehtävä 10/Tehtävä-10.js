function sort(){
  var vastaus = "";
  var a, b; //muutttujat pitää ilmoittaa ennen kuin niitä voi käyttää.
  vastaus = document.getElementById('salasana').value; //hakee kohdan mihin salasana kirjoitetaan.
  var kirjain = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var c = [];
  var strg = "";

  for (var i = 0; i < vastaus.length; i++){ //määräykset
    a = vastaus[i]; //a = ylimmäset määräykset + stringi.
    c.push(a); //lisää a-muuttujan taulukkoon(array).
    var math = Math.floor(Math.random()*kirjain.length); //katsoo sanan pituuden ja valitsee ylemmistä kirjaimista randomisti.
    b = kirjain[math]; //b = kaikki kirjaimet ja ylempi koodi.
    c.push(b); //lisää b-muuttujan taulukkoon(array).
  }
  strg = c.join(''); //'' = kirjainten välillä ei välejä.
    document.getElementById('tulokset').textContent = strg; //tulostaa ulos salasanan
}
