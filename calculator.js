// Get the user inputs
var continueCal = true;
do {
  console.log("-----");
  calcChoice = prompt("Which calculator do you want to use?  (B)asic | (A)dvanced | (BMI)");
  if(calcChoice == "b"){
  var value1 = parseInt(prompt('enter first value'));
  var value2 = parseInt(prompt('enter the second value'));
  var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (Mo)dulus') || "a";

  if(choice == "a"){
    Addition();
  }
  else if(choice == "s"){
    Subtraction();
  }
  else if(choice == "d"){
    Division();
  }
  else if(choice == "m"){
    Multiplication();
  }
  else if(choice == "mo"){
    Modulus();
  }
  else{
    console.log("Not a valid input.");
  }
}
//Advanced Calculator
  else if(calcChoice == "a"){
    var choice = prompt('Choose your action (p)ower (s)quareroot') || "a";

    if(choice == "p"){
      var value3 = parseInt(prompt('enter a value'));
      var value4 = parseInt(prompt('to the power of...'))
      console.log(Power());
    }

    else if(choice == "s"){
      var value3 = parseInt(prompt('enter a value'));
      console.log(SquareRoot());
    }
    else{
      console.log("Not a valid input.");
    }
  }
  else if(calcChoice == "bmi"){
    var weight = parseInt(prompt("What's your weight in kilos?"));
    var height = parseInt(prompt('How tall are you in centimeters?'))

    console.log("Your BMI is: " + weight / (height * height) * 10000);
  }

  var goAgain = prompt("Continue? (Y)es (N)o");
  if(goAgain == "n"){
    continueCal = false;
  }
  else {
    continueCal = true;
  }
} while (continueCal)

//Calculator Functions
function Modulus(){
  console.log(value1 % value2);
}

function Addition(){
  console.log("The sum of " + value1 + " and " + value2  + " is: " + (value1 + value2));
}

function Subtraction(){
  console.log("" + value1 + " minus " + value2 + " is: " + (value1 - value2));
}

function Division(){
  console.log("" + value1 + " divided by " + value2 + " is: " + (value1 / value2));
}

function Multiplication(){
  console.log("" + value1 + " multiplied by " + value2 + " is: " + (value1 * value2));
}

function Power(){
  console.log(value3 + " to the power of " + value4 + " is: " + (Math.pow(value3, value4)));
}

function SquareRoot(){
  console.log("The square root of " + value3 + " is: " + (Math.sqrt(value3)));
}
