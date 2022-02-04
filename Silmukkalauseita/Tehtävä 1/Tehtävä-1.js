function sort(){
  var num1 = parseInt(document.getElementById('numero1').value);
  var numerot = ""; // ilman tätä numerot eivät näy

  for (var i=2; i<=num1; i= i+2){
    numerot += i + " ";
  }
  document.getElementById('tulokset').textContent = numerot;
}
//textContent
 // (var i = 2;) sets a variable before the loop starts. [starts with 2 not 0]
 // (i <= num1;) defines the condition for the loop to run. [ variable will only print out if given number(num1) is bigger than 2 or equal to 2]
 // (i= i+2) increases a value each time the code block in the loop has been executed. [ always increase the printed out value by 2, starting at 2]
