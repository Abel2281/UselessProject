let arr = JSON.parse(localStorage.getItem('inputArray')) || [];
document.getElementById('submitBtn').addEventListener('click', () => {
    let input = document.getElementById('earthNumber').value;
    if (arr.includes(input)) {
        window.location = 'index5.html';
    }
    else {
        arr.push(input);
        localStorage.setItem('inputArray', JSON.stringify(arr));
        window.location = 'index2.html'; 
    }
});