function sort(){
  var sana = document.getElementById('Sana').value;
  var pisteet = 0; //Koodi ei näytä vastausta ilman tätä!

  for(var i = 0; i < sana.length; i++){
    switch (sana[i]){
      case 'a': //Molemmat isot ja pienet kirjaimet a/A
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'n':
      case 'N':
      case 's':
      case 'S':
      case 't':
      case 'T':
        pisteet++; //Kaikista ylemmistä kirjaimista saa 1 pisteen.
        break;
      case 'o':
      case 'O':
      case 'ä':
      case 'Ä':
      case 'k':
      case 'K':
      case 'l':
      case 'L':
        pisteet += 2; //Kaikista ylemmistä kirjaimista saa 2 pistettä.
        break;
      case 'u':
      case 'U':
      case 'm':
      case 'M':
        pisteet += 3; //Kaikista ylemmistä kirjaimista saa 3 pistettä.
        break;
      case 'y':
      case 'Y':
      case 'h':
      case 'H':
      case 'j':
      case 'J':
      case 'p':
      case 'P':
      case 'r':
      case 'R':
      case 'v':
      case 'V':
        pisteet += 4; //Kaikista ylemmistä kirjaimista saa 4 pistettä.
        break;
      case 'ö':
      case 'Ö':
      case 'd':
      case 'D':
        pisteet += 7; //Kaikista ylemmistä kirjaimista saa 7 pistettä.
        break;
      case 'b':
      case 'B':
      case 'f':
      case 'F':
      case 'g':
      case 'G':
        pisteet += 8; //Kaikista ylemmistä kirjaimista saa 8 pistettä.
        break;
      case 'c':
      case 'C':
        pisteet += 10; //Kaikista ylemmistä kirjaimista saa 10 pistettä.
        break;
      default:
        pisteet += 12; //Kaikista muista ei mainituista kirjaimista saa 12 pistettä.
    }
    document.getElementById('tulokset').textContent = "Sanan " + sana + " pisteet ovat: " + pisteet;
  }
}
