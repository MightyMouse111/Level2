//ADD:
const addForm = document.addition //Going to the document and grabbing the name addition.
addForm.addEventListener('submit', function(e){ //Submit operation/function
    e.preventDefault()

    const firstNumber = addForm.firstNumber.value //Grab our form with the input name we want to select and its value to be determined below.
    const secondNumber = addForm.secondNumber.value 
    addForm.firstNumber.value = '' //Grab our form and the input name then select value to make it equal blank so it reads whatever value the user input ('').
    addForm.secondNumber.value = '' 
    const h3 = document.createElement('h3') //Create an element that can be used to display our result.
    h3.textContent = Number(firstNumber) + Number(secondNumber) //Make text content for new element made be the numbers added.
    document.getElementsByTagName('div')[0].append(h3) //Get the div tag name and now specifically select the first one made with 0. Then add it to the end of our h3 to display on html page. 
});

//SUBTRACT:
const subForm = document.subtraction
subForm.addEventListener('submit', function(e){ //Submit operation/function
    e.preventDefault()

    const thirdNumber = subForm.thirdNumber.value
    const fourthNumber = subForm.fourthNumber.value
    subForm.thirdNumber.value = ''
    subForm.fourthNumber.value = ''
    const h3 = document.createElement('h3')
    h3.textContent = Number(thirdNumber) - Number(fourthNumber)
    document.getElementsByTagName('div')[1].append(h3)
});

//MULTIPLY:
const multForm = document.multiplication
multForm.addEventListener('submit', function(e){ //Submit operation/function
    e.preventDefault()

    const fifthNumber = multForm.fifthNumber.value
    const sixthNumber = multForm.sixthNumber.value
    multForm.fifthNumber.value = ''
    multForm.sixthNumber.value = ''
    const h3 = document.createElement('h3')
    h3.textContent = Number(fifthNumber) * Number(sixthNumber)
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