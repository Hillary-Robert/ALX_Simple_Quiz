
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let addition = document.getElementById("add");
let answer = document.getElementById("calculation-result")
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");



function add(number1, number2){
  return number1 + number2;
}


function subtraction(number1, number2){
  return number1 - number2;
}

function multiplication(number1, number2){
  return number1 * number2;
}


function division(number1, number2){
  if(number2 === 0){
    answer.style.color ="red"
    return "Cannot divide by zero"
    
  }else{
    return number1 / number2;

  }
}



addition.addEventListener("click", function(){

  let firstNumber = parseFloat(number1.value)
  let SecondNumber = parseFloat(number2.value)
  const result  = add(firstNumber,SecondNumber)
  answer.textContent = result
})



subtract.addEventListener("click", function(){
  
  let firstNumber = parseFloat(number1.value)
  let SecondNumber = parseFloat(number2.value)
  const result  = subtraction(firstNumber,SecondNumber)
  answer.textContent = result
})


multiply.addEventListener("click", function(){
  
  let firstNumber = parseFloat(number1.value)
  let SecondNumber = parseFloat(number2.value)
  const result  = multiplication(firstNumber,SecondNumber)
  answer.textContent = result
})



divide.addEventListener("click", function(){
  
  let firstNumber = parseFloat(number1.value)
  let SecondNumber = parseFloat(number2.value)
  const result  = division(firstNumber,SecondNumber)
  answer.textContent = result
})