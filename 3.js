let a = 1
let b = 100
let c = 50
let d = 1111
if (!isNaN(a) && isFinite(a) && !isNaN(b) && isFinite(b) && !isNaN(c) && isFinite(c) && !isNaN(d) && isFinite(d))
    {if (a > b && a > c && a > d)
        {
        max = a;
        }
        else if (b > a && b > c && b > d) 
        {
        max = b;
        }
        else if (c > a && c > b && c > d)
        {
        max = c;
        }
        else {
        max = d;
        }
        console.log(max)}
else
{console.log("Не верно введены значения чисел") }