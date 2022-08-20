//UI Variables
let form = document.getElementById("form"),
  loanAmount = document.getElementById("loan-amount"),
  interestRate = document.getElementById("interest-rate"),
  repaymentYears = document.getElementById("years"),
  resultsDiv = document.getElementById("results"),
  loadingDiv = document.getElementById("loading"),
  monthlyPayments = document.getElementById("monthly-payments"),
  totalPayment = document.getElementById("total-payment"),
  totalInterest = document.getElementById("total-interest"),
  showErrorDiv = document.getElementById("show-error");

//Hide the Gif & results div at the onset
resultsDiv.style.display = "none";
loadingDiv.style.display = "none";

//showError function
function showError() {
  showErrorDiv.classList.add("alert", "alert-warning");
  showErrorDiv.innerHTML = "<p>Please enter a number in the field(s) below</p>";

  setTimeout(() => {
    showErrorDiv.classList.remove("alert", "alert-danger");
    showErrorDiv.innerHTML = "";
  }, 2000);
}

//calculate the interest once the form is submitted
form.addEventListener("submit", calculateInterest);

function calculateInterest(event) {
  if (
    loanAmount.value === "" ||
    interestRate.value === "" ||
    repaymentYears.value === ""
  ) {
    showError();
  } else {
    loadingDiv.style.display = "block";

    setTimeout(() => {
      let interest =
        (loanAmount.value * interestRate.value * years.value) / 100;
      console.log(interest);

      let totalMonthly = (interest / (years.value * 12)).toFixed(2);
      console.log(totalMonthly);

      let total = parseInt(loanAmount.value) + interest;
      console.log(total);

      totalInterest.value = interest;
      totalPayment.value = total;
      monthlyPayments.value = totalMonthly;

      loadingDiv.style.display = "none";
      resultsDiv.style.display = "block";

    }, 2000);
  }

  event.preventDefault();
}
