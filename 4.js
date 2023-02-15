let x = 2
let y = 5
let z = "*"
if (!isNaN(x) && isFinite(x) && !isNaN(y) && isFinite(y)) {
z === "+" ? console.log(z = x+y) : 
z === "-" ? console.log(z = x-y) : 
z === "*" ? console.log(z = x*y) : 
z === "/" ? console.log(z = x/y) : console.log("Выберите математическое действие")}
else {console.log("Не верно введены значения")}