// -------------------------------------------------------------------------------------------------
// NEW CODE:
const totalForm = document.billing //Going to the document and grabbing the name addition.
totalForm.addEventListener('submit', function(e){ //Submit operation/function
    e.preventDefault()

    const firstNumber = totalForm.firstNumber.value //Grab our form with the input name we want to select and its value to be determined below.
    totalForm.firstNumber.value = '' //Grab our form and the input name then select value to make it equal blank so it reads whatever value the user input ('').
    const h3 = document.createElement('h2') //Create an element that can be used to display our result.
    const secondNumber = totalForm.secondNumber.value //Grab our form with the input name we want to select and its value to be determined below.
    totalForm.secondNumber.value = '' //Grab our form and the input name then select value to make it equal blank so it reads whatever value the user input ('').


    const thirdNumber = totalForm.thirdNumber.value //Grab our form with the input name we want to select and its value to be determined below.
    totalForm.thirdNumber.value = '' //Grab our form and the input name then select value to make it equal blank so it reads whatever value the user input ('').
    h3.textContent = Number(firstNumber) * 5 + Number(secondNumber) * 7 + Number(thirdNumber) * 11
    console.log(Number(firstNumber * 5) + Number(secondNumber * 7)) + Number(thirdNumber * 11)
    document.getElementsByTagName('div')[2].append(h3)
});

// You are going to create a simple calculator that can Add, Subtract, and Multiply.

// **Requirements:**

// - You will have one section (`<div>`) for each math operation (so 3 sections) total
// - Each section has two inputs to take the first and second numbers
// - Each section will have a button to perform the operation
// - You will inject the result into the HTML (not an alert)
// - Your website will have 3 colors
// - Your website will have proper padding/spacing to lay things out nicely

// -------------------------------------------------------------------------------------------------