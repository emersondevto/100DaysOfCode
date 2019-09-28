console.log("Loan Calculator [Part 2] - Build the UIobject");

// clear error
function clearError() {
  document.querySelector(".alert").remove();
}

// show error
function showError(message) {
  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // create div
  const errorDiv = document.createElement("div");

  // add class
  errorDiv.className = "alert alert-danger";

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(message));

  // insert error avobe heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// calculate resoult
function calculateResults() {
  // UI Variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  // console.log(amount,interest,years)

  // UI Variables Results
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");
  // console.log(monthlyPayment,totalInterest,totalPayment)

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // console.log(principal, calculatedInterest, calculatedPayments)
  // compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  // console.log(x)
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    //show results
    document.getElementById("results").style.display = "block";
  } else {
    // console.log('Error')
    showError("Please check your numbers");
  }
  // hide loader
  document.getElementById("loading").style.display = "none";
}

// Listen for submit

document.getElementById("loan-form").addEventListener("submit", function(e) {
  //hide results
  document.getElementById("results").style.display = "none";

  // show loader
  document.getElementById("loading").style.display = "block";

  e.preventDefault();
  setTimeout(calculateResults, 2000);
});
