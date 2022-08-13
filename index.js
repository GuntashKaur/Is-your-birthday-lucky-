const dateOfBirth = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check-button");

checkButton.addEventListener("click", clickHandler);

function clickHandler(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    
}

