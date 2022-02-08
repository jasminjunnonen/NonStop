function sort(){
  var taulu = "<table border>";
  var numerot = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];

  for(var a = 0; a < numerot.length; a++){
    taulu += '<tr>';
    for(var b = 0; b < numerot.length; b++){
      taulu += '<th>' + numerot[a][b];
    }
    document.getElementById('tulokset').innerHTML = taulu;
  }
}
