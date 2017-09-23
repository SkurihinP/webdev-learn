function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
var POSITION_COUNT = 10;
var arr = [];
var i, timeVariable;

for (i = 0; i < POSITION_COUNT; i++) {
  arr[i] = getRandomInt(0, 15);
}
alert ("Элементы массива: " + arr.join(" ") );
do {
  timeVariable = prompt("Введите число: ", '');
  timeVariable = parseInt(timeVariable);
  if ( (timeVariable == "") || (isNaN(timeVariable) ) ) {
      alert ("Ошибка");
  }
}
while ( (timeVariable == "") || (isNaN(timeVariable) ) );
if (arr.indexOf(timeVariable) !== -1) {
  alert("Элемент найден");
}
else {
  alert("Элемент не найден!");
}