var i = true
var table = [];
var somme = 0;
var y = 0;

while (i === true) {
  table.push(parseInt(prompt("Entrer un nombre")))
  i = confirm("Voulez-vous continuer?");
}


for (y = 0; table.length > y; y++) {
  somme = somme + table[y];
}


var max = table[0];
var j = 0;

for (j = 0; table.length >= j; j++) {
  if (table[j] > max) {
    max = table[j];
  }
}

var min = table[0];

for (j = 0; table.length >= j; j++) {
  if (table[j] < min) {
    min = table[j];
  }
}

alert("Nombres entrees:" + table);
alert("Somme=" + somme);
alert("Moyenne=" + (somme / table.length));
alert("Min=" + min);
alert("Max=" + max);
