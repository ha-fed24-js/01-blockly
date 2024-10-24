/*
Övning 9
var x, y, z;

x = 3;
y = 4;
z = 5;
console.log(x + y + z)
console.log(x * y * z)
*/
/*
var index;
index = 1;
while (index <= 4) {
	console.log('Much wow!')
	index = index + 1;
}

for (var count = 0; count < 4; count++) {
  console.log('Du kan lära dig JavaScript!')
}
*/

/*
var x;
x = 1;
while (x <= 3) {
  x = x + 1;
  console.log(x)
}
*/

/*
// Detta är funktionens DEFINITION
function giveMeFive() {
	console.log('Jag är inuti funktionen')
	return 5;
}

// Här ANROPAR vi funktionen
console.log(giveMeFive())
console.log('console.log är en funktion!')
*/

/*
var x, a, b, resultat;

// Beskriv denna funktion...
function print2() {
  console.log('Denna funktion skriver ut saker')
  for (var count = 0; count < 5; count++) {
    console.log('Hej')
  }
}

// Beskriv denna funktion...
function giveMeFive() {
  console.log('Jag är inuti funktionen')
  return 5;
}

// Beskriv denna funktion...
function add(a, b) {
  resultat = a + b;
  return resultat;
}


console.log('console.log är en funktion!')
console.log(giveMeFive())
print2();
console.log(add(5, 10))
*/

var x, lista, y, index, element;


lista = [5, 10, 15, 20, 25, 30];
console.log(lista.length)
index = 1;
while (index <= lista.length) {
  element = lista[(index - 1)];
  console.log(element)
  index = index + 1;
}
