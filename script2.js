function getRandomDate(start, end) {
    const randomTimestamp = Math.floor(Math.random() * (end - start + 1)) + start;
    return new Date(randomTimestamp);
}

const startDate = new Date(2024, 10, 1).getTime(); 
const endDate = new Date(2025, 0, 1).getTime(); 

const randomDate = getRandomDate(startDate, endDate);

function updateCountdown() {

    const days = Math.floor(randomDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((randomDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((randomDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((randomDate % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

}

setInterval(updateCountdown, 1000);

document.getElementById('destroyBtn').addEventListener('click', ()=>{
    window.location = 'index3.html';
});

document.getElementById('back-link').addEventListener('click', ()=>{
    window.location = 'index.html';
})