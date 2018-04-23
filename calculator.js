
    // get the user inputs
var calcChoice = prompt("Which calculator do you want to use?  (B)asic | (A)dvanced")

if(calcChoice == "b")
{
  var value1 = parseInt(prompt('enter first value'));
  var value2 = parseInt(prompt('enter the second value'));
  var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (Mo)dulus') || "a";

//Basic Calculator
  if(choice == "a")
  {
    Addition();
  }
  else if(choice == "s")
  {
    Subtraction();
  }
  else if(choice == "d")
  {
    Division();
  }
  else if(choice == "m")
  {
    Multiplication();
  }
  else if(choice == "mo")
  {
    Modulus();
  }
  else
  {
    console.log("Not a valid input.");
  }
}
function Modulus()
{
  console.log(value1 % value2);
}
function Addition()
{
  console.log(value1 + value2);
}
function Subtraction()
{
  console.log(value1 - value2);
}
function Division()
{
  console.log(value1 / value2);
}
function Multiplication()
{
  console.log(value1 * value2);
}
function Power()
{
  console.log(Math.pow(value1, value2));
}
function SquareRoot()
{
  console.log(Math.sqrt(value1));
}
