function getRandomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min 
  }

var N = 10, a = [N], k,i, isFound;

for (i=1;i<N;i++)
{
  a[i] = getRandomInt(0,15);
}
alert ("Элементы массива: "+ a.join(" "));
var k = prompt("Введите число К: ",'');
isFound = false;
for (i=1;i<N;i++)
{
  if (a[i] == k) 
    {
      isFound = true;
    }
  
}
if (isFound) {
  alert('Элемент найден')
}
else
{
  alert('Элемент не найден!')
}