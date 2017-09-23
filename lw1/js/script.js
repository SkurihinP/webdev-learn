function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min 
  }
var POSITIONS = 10;
var mass = [POSITIONS];
var i, isFound;

for (i = 0; i < POSITIONS; i++)
{
  mass[i] = getRandomInt(0,15);
}
alert ("Элементы массива: " + mass.join(" "));
var timeVariable = prompt("Введите число К: ",'');
if ((timeVariable == "") || (timeVariable == null) || (isNaN(timeVariable))) {
    alert ("Ошибка");
    break;
}
isFound = false;
for (i = 0; i < POSITIONS; i++) {
  if (mass[i] == timeVariable) {
      isFound = true;
    }
}
if (isFound) {
  alert('Элемент найден');
}
else {
  alert('Элемент не найден!');
}