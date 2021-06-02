// Queryselector will only obtain 1 object from DOM having the specified class
const container = document.querySelector('.container');

// QueryselectorAll will obtain the objects from DOM having the specified class
// Each of the objects are stored in an array like of data
// Also notice the format where we specify the DOM object within the parameter similar
// to how we specify it in the CSS
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Adding the "+" sign parse the value as Integer
const ticketPrice = +movieSelect.value;

// Updates the total and count fields
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    console.log(selectedSeatsCount);
}

// "(e) =>" is similar to "function(e) {....}"
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
} );