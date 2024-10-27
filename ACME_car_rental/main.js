const pickupDate = document.getElementById("pickupInput");
const numDaysRenting = document.getElementById("numberOfDays");
const tolls = document.getElementById("tolls");
const gps = document.getElementById("gps");
const roadsideAssistance = document.getElementById("assistance");
const checkedNo = document.getElementById("noChecked");
const checkedYes = document.getElementById("yesChecked");
const totalCostBtn = document.getElementById("totalCost");
const rentTotal = document.getElementById("rentTotal");
const optionTotal = document.getElementById("optionTotal");
const surchargeTotal = document.getElementById("surchargeTotal");
const finalAmount = document.getElementById("finalAmount");
//whats given?
// 29.99 perday
// 30% surchagine under 25

//what we need to do?
//calculate basic car rental price
//calculate options selected
//calculate surcharge
//calculate total
// display all msgs to html

let basicCarRental = 0;
let option = 0;
let surcharge = 0;
let total = 0;
let display = false;

function calculateCarRental() {
  //car rental
  basicCarRental = Number(numDaysRenting.value) * 29.99;
  console.log(basicCarRental.checked);

  // options
  if (tolls.checked) {
    option += Number(tolls.value) * Number(numDaysRenting.value);
  }
  if (gps.checked) {
    option += Number(gps.value) * Number(numDaysRenting.value);
  }
  if (roadsideAssistance.checked) {
    option += Number(roadsideAssistance.value) * Number(numDaysRenting.value);
  }

  //age option
  if (checkedYes.checked || checkedNo.checked) {
    if (checkedYes.checked) {
      surcharge = basicCarRental * 0.3;
    }
  } else {
    return alert("Please complete the form");
  }

  //calculate total
  total = basicCarRental + option + surcharge;

  if (!display) {
    // display all msgs to html
    rentTotal.textContent = `Car rental: $${basicCarRental.toFixed(2)}`;

    optionTotal.textContent = `Options: $${option.toFixed(2)}`;

    surchargeTotal.textContent = `Under 25 surcharge: $${surcharge.toFixed(2)}`;

    finalAmount.textContent = `Total due: $${total.toFixed(2)}`;

    display = true
  }
}
