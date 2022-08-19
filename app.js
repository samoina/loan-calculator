//UI Variables
let form = document.getElementById("form"),
  loanAmount = document.getElementById("loan-amount"),
  interestRate = document.getElementById("interest-rate"),
  repaymentYears = document.getElementById("years"),
  resultsDiv = document.getElementById("results"),
  loadingDiv = document.getElementById("loading"),
  monthlyPayments = document.getElementById("monthly-payments"),
  totalPayment = document.getElementById("total-payment"),
  totalInterest = document.getElementById("total-interest");

//Hide the Gif & results div at the onset
// resultsDiv.style.display = 'none';
// loadingDiv.style.display = "none";

//calculate the interest once the form is submitted
form.addEventListener("submit", calculateInterest);

function calculateInterest(event) {
  let interest = (loanAmount.value * interestRate.value * years.value) / 100;
  console.log(interest);

  let totalMonthly = (interest / (years.value * 12)).toFixed(2);
  console.log(totalMonthly);

  let total = parseInt(loanAmount.value) + interest;
  console.log(total);

  totalInterest.value = interest;
  totalPayment.value = total;
  monthlyPayments.value = totalMonthly;


  event.preventDefault();
}
