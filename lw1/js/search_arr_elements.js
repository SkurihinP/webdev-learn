function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
var POSITION = 10;
var mass = [POSITION];
var i,timeVariable, isFound;
for (i = 0; i < POSITION; i++)
{
  mass[i] = getRandomInt(0, 15);
}
alert ("Элементы массива: " + mass.join(" "));
do {
  timeVariable = prompt("Введите число: ", '');
  timeVariable = parseInt(timeVariable);
  if ((timeVariable == "") || (isNaN(timeVariable))) {
      alert ("Ошибка");
  }
}
while ((timeVariable == "") || (isNaN(timeVariable)))
isFound = false;
for (i = 0; i < POSITION; i++) {
  if (mass[i] == timeVariable) {
      isFound = true;
    }
}
if (mass.indexOf(timeVariable) !== -1) {
  alert("Элемент найден");
}
else {
  alert("Элемент не найден!");
}