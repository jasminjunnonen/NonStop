function vastaukset(){
  var yhteensa = 5;
  var pisteet = 0;
  var huom = 0;
  var k1 = document.forms.lomake.k1.value;
  var k2 = document.forms.lomake.k2.value;
  var k3 = document.forms.lomake.k3.value;
  var k4 = document.forms.lomake.k4.value;
  var k5 = document.forms.lomake.k5.value;
  var vastaukset = ["b","a","d","b","d"];

  for(i = 1; i <= yhteensa; i++)
  {
    if(eval('k' + i) == null || eval ('k'+ i) == '')
    {
      alert('Et vastannut kysymykseen numero: ' + i);
      huom = 1;
    }
    if(huom == 1) return false;
  }

  for(i = 1; i <= yhteensa; i++)
  {
    if(eval('k' + i) == vastaukset[i - 1])
    {
      pisteet++;
    }
  }

  var tulokset = document.getElementById("tulokset");
  alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensa);
  tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>' + yhteensa + '</span></h3>';
  return false;
}
