// Get the user inputs


for (var i = 1; i >= 0; i++)
{
  calcChoice = prompt("Which calculator do you want to use?  (B)asic | (A)dvanced")
  if(calcChoice == "b")
  {
    var value1 = parseInt(prompt('enter first value'));
    var value2 = parseInt(prompt('enter the second value'));
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (Mo)dulus') || "a";

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
  //Advanced Calculator
  else if(calcChoice == "a")
  {
    var choice = prompt('Choose your action (p)ower (s)quareroot') || "a";

    if(choice == "p")
    {
      var value3 = parseInt(prompt('enter a value'));
      var value4 = parseInt(prompt('to the power of...'))
      console.log(Power());
    }

    else if(choice == "s")
    {
      var value3 = parseInt(prompt('enter a value'));
      console.log(SquareRoot());
    }
    else
    {
      console.log("Not a valid input.");
    }
  }
  else
  {
    var quit = prompt("Type anything to quit");
    if(quit)
    {
      break;
    }
    else
    {
      alert("Let's do math!");
    }
  }
}
//Basic Calculator




//Calculator Functions
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
  console.log(Math.pow(value3, value4));
}
function SquareRoot()
{
  console.log(Math.sqrt(value3));
}
