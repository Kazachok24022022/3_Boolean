let year = 3000;
if ((year % 4 == 0) && year % 100 != 0)
{
  console.log("Високосный")            
}
else if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0))
{
  console.log("Високосный")
}
else 
{
  console.log("Не Високосный")   
}       
