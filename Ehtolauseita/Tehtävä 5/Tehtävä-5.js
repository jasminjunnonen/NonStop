function sort(){
  var kieli = document.getElementById('eriKieli').value;

   if (kieli == 'englanti'){
     document.getElementById('tulokset').innerHTML = ("Hello World!");
   }
   else if (kieli == 'ruotsi'){
     document.getElementById('tulokset').innerHTML = ("Hej Världen!");
   }
   else if (kieli == 'espanja'){
     document.getElementById('tulokset').innerHTML = ("Hola Mundo!");
   }
   else {
     alert("Et ole valinnut mitään.");
   }
 }
