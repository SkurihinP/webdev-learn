function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min 
    }
var N = 10, a = [N], k,i, isFound;

for (i=1;i<N;i++)
{
    a[i] = getRandomInt(1,15);
}


alert ("Элементы массива: "+ a.join(" "));
k = getRandomInt(1,95);
alert ("Элемент К= "+k);
isFound = false;

for (i=1;i<N;i++)
{
    if (a[i] = k) 
    {
        isFound = true;
    }
    else isFound = false;
}

if (isFound) {
  alert('Элемент найден')
}
else
{
  alert('Элемент не найден!')
}