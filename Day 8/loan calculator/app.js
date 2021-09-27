document.getElementsByClassName('btn btn-dark btn-block')[0].addEventListener('click',
// resultCalculator)
function(e) {

    document.getElementById('loading').style.display = "block";
    document.getElementById('results').style.display = 'none';
    // document.getElementById('loading').style.display = "block";

    setTimeout(resultCalculator, 2000);

    e.preventDefault();
});


//function resultCalculator(e) {
function resultCalculator() {
    //e.preventDefault();
    // vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = (parseFloat(interest.value) / 100) / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        document.getElementById('loading').style.display = "none";
        document.getElementById('results').style.display = 'block';
    }else{
        console.log('here')
        showError('Please enter the values');
    }
}

function showError(error) {
    document.getElementById('loading').style.display = "none";
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));

    let card = document.querySelector('.card');
    let heading = document.querySelector('.heading');

    card.insertBefore(errorDiv, heading);
    setTimeout(clear, 3000);
}

function clear(){
    document.querySelector('.alert').remove();
}