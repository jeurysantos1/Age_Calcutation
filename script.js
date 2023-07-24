//Selection the output
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
//Selecting the button 
const submit_btn = document.querySelector("#main_button");


//Selction for the input

const input_years =  document.querySelector("#YEAR");
const input_months = document.querySelector("#MONTH");
const input_days = document.querySelector("#DAY");

//Error Section 
let isValid = false;
const error_day = document.querySelector(".error_day");
const error_month = document.querySelector(".error_month");
const error_year = document.querySelector(".error_year");
submit_btn.addEventListener("click", CalculateDate);

/// cehcking for errors in days

input_days.addEventListener('input', (e)=>{
    if (+input_days.value > 31){
        error_day.textContent = "Must be a valid day";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        error_day.textContent =" ";
    }
    if (+input_days.value === 0){
        isValid = false;
        error_day.textContent="Please enter a day";
        isValid = false;
        return;

    }
    else{
        isValid = true;
        error_day.textContent =" ";
    }
   
});

//checking for errors in months
input_months.addEventListener("input", e => {
    if(+input_months.value > 12){
    error_month.textContent = "Must be a valid month";
    isValid = false;
    return;
}
else{
    isValid = true;
    error_month.textContent =" ";
}
    if (+input_months.value === 0){
    isValid = false;
    error_month.textContent="Please enter a month";
    isValid = false;
    return;
}
else{
    isValid = true;
    error_month.textContent =" ";
}
});

//checking for errors in year
input_years.addEventListener("input", e => {
    if(+input_years.value > 2023){
    error_year.textContent = "Must be a valid year";
    isValid = false;
    return;
}
else{
    isValid = true;
    error_year.textContent =" ";
}
    if (+input_years.value === 0){
    isValid = false;
    error_year.textContent="Please enter a year";
    isValid = false;
    return;
}
else{

    error_year.textContent =" ";
}
});

//Button Behaviors calculation // error management
function CalculateDate(){
    if (isValid) {
        let birthday = `${input_months.value}/${input_days.value}/${input_years.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        // DISPLAYING EVERYTHING
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;

    }
       else{
         alert("error must enter a valid date");
    }
}