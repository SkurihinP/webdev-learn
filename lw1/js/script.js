function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min 
  }

var POSITIONS = 10;
var mass = [POSITIONS];
var k,i, isFound;

for (i = 0; i < POSITIONS; i++)
{
  mass[i] = getRandomInt(0,15);
}
alert ("Элементы массива: "+ mass.join(" "));
var k = prompt("Введите число К: ",'');
if ((k=="") || (k==null) || (isNaN(k))) {
    alert ("Ошибка");
    break;
}
isFound = false;
for (i = 0; i < POSITIONS; i++) {
  if (mass[i] == k) {
      isFound = true;
    }
}
if (isFound) {
  alert('Элемент найден');
}
else {
  alert('Элемент не найден!');
}