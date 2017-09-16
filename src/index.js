module.exports = function zeros(expression) {
 
 var quantity2 = 0;
 var quantity5 = 0;
 var expression2 = 0;
 var number = 0;
 var expressionArray = [];
 var quantityPoint = 0;
 var garbage = 0;
 var expressionArrayNumber;

  function quantity2f(number){
    while (number % 2 == 0 && number > 1){
      quantity2++;
      number = number / 2;
    }
  } 

  function quantity5f(number){
    while (number % 5 == 0 && number > 1){
      quantity5++;
      number = number / 5;
    }
  }

  function factorial(expression2){
    expression2 = parseInt(expression2);
    while(expression2 > 1){
      quantity2f(expression2);
      quantity5f(expression2);
      expression2 = expression2 - 1;
    }   
  }

  function factorial2(expression2){
    expression2 = parseInt(expression2);
    while(expression2 > 1){
      quantity2f(expression2);
      quantity5f(expression2);
      expression2 = expression2 - 2;
    }
  }

  function splitting(expressionArrayNumber){
    quantityPoint = 0;
    expression2 = 0;
    for(var j = 0; j < expressionArrayNumber.length; j++){ 
      if (expressionArrayNumber[j] == '!') {
        quantityPoint++;
        } else {
          expression2 = expression2 + expressionArrayNumber[j];
      }
    }
  }

  expressionArray = expression.split('*');
  
  for (var i = 0; i < expressionArray.length; i++){
    expressionArrayNumber = expressionArray[i];
    splitting(expressionArrayNumber);
    if (quantityPoint == 1) {
      factorial(expression2);
    } else {
      factorial2(expression2);
    }
  }

  if (quantity2 < quantity5) {
    return quantity2;
  } else {
    return quantity5;
  }
}
