function sort(){
  var num1 = parseInt(document.getElementById('numero').value);
  var lause = num1 + " x 1 = " + num1 * 1 + "<br>";

  lause += num1 + " x 2 = " + num1 * 2 + "<br>";
  lause += num1 + " x 3 = " + num1 * 3 + "<br>";
  lause += num1 + " x 4 = " + num1 * 4 + "<br>";
  lause += num1 + " x 5 = " + num1 * 5 + "<br>";
  lause += num1 + " x 6 = " + num1 * 6 + "<br>";
  lause += num1 + " x 7 = " + num1 * 7 + "<br>";
  lause += num1 + " x 8 = " + num1 * 8 + "<br>";
  lause += num1 + " x 9 = " + num1 * 9 + "<br>";
  lause += num1 + " x 10 = " + num1 * 10;

  document.getElementById('tulokset').innerHTML = lause;
}
