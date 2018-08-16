// Business logic
// var numberCheck = function(input){
//   if (!input.match(/^[0-9]+$/)){
//     alert("Please enter a valid number.")
//   }
//   else if( input > 3999){
//     alert("Enter a number less than 4000!");
//   }
//   else{
//     input = parseInt(input);
//   }
// }
var operation = function(input) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var result ="";

  for(var i=0; i<decimal.length; i++){
    while(input%decimal[i] < input){
      result = result + roman[i];
      input = input-decimal[i];
    }
    }
    return result;

  }

// user interface
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var input = parseInt($("#number").val());
    if(input>3999){
      alert("Enter a number less than 4000");
    }
    else{
      $("#result").append(operation(input));
    }

  });
});
