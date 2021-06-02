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
let ticketPrice = +movieSelect.value;

populateUI();

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedmoviePrice', moviePrice);
}

// Updates the total and count fields
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //copy selected seats into an array
    //map through array
    //return a new array indexes

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat,index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event listener
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// "(e) =>" is similar to "function(e) {....}"
// This an Event Listener when seats are selected/unselected
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
} );

// Initial count and total set
updateSelectedCount();