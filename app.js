//UI Variables
let form = document.getElementById('form'),
    loanAmount = document.getElementById('loan-amount'),
    interestRate = document.getElementById('interest-rate'),
    repaymentYears = document.getElementById('years'),
    resultsDiv = document.getElementById('results'),
    loadingDiv = document.getElementById('loading'),
    monthlyPayments = document.getElementById('monthly-payments'),
    totalPayment = document.getElementById('total-payment'),
    totalInterest = document.getElementById('total-interest');

//Hide the results div at the onset
resultsDiv.style.display = 'none';

//calculate the interest once the form is submitted
form.addEventListener('submit', calculateInterest);

function calculateInterest(event){
  totalInterest = (loanAmount.value * interestRate.value * years.value)/100;
  console.log(totalInterest);

  monthlyPayments = (totalInterest/(years.value * 12)).toFixed(2);
  console.log(monthlyPayments);

  totalPayment = parseInt(loanAmount.value) + totalInterest;
  console.log(totalPayment);

  event.preventDefault();
}

