const travelForm = document.travelForm;

travelForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const checkedInputs = []
    var first = document.getElementById("firstname").value;         //First name:
    var last = document.getElementById("lastname").value;           //Last name:
    var age = document.getElementById("age").value;                 //Age:
    var gender = travelForm.elements["gender"].value;               //Gender:
    var location = document.getElementById("travel-location").value;    //Location:
    // console.log(first + " " + last )
    // console.log(travelForm.age.value)
    // console.log(travelForm.name.value)
    // console.log(travelForm.dietary.value)
    // console.log(travelForm.gender.value)

    for(let i = 0; i < travelForm.dietary.length; i++){             //Diet:
        if(travelForm.dietary[i].checked){
            checkedInputs.push(travelForm.dietary[i].value)
        }
    }
    
    alert("First name: " + first + "\nLast name: " + last + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + checkedInputs)
})

// })
// var gender = document.getElementsByName("gender").value;