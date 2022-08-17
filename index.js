const dateOfBirth = document.querySelector("#date-of-birth");

const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check-button");

checkButton.addEventListener("click", clickHandler);

function clickHandler(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);

    compareValues(sum, luckyNumber.value);
    
}

function calculateSum(dob){

    dob = dob.replaceAll("-", "");
    let add = 0;
    for(let i=0; i<dob.length ; i++){
        add = add + Number(dob.charAt(i));
    }
    return add;

}

function compareValues(sum,luckyNumber){

    if(sum%luckyNumber===0){
        console.log("Your birthday is lucky")
    }
    else{
        console.log("Your birthday is not lucky")
    }

}
