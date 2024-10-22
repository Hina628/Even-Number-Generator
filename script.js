
function generateEven() {
    const inputValue = document.getElementById('inputValue').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (inputValue === '' || isNaN(inputValue) || inputValue <= 0) {
        resultDiv.innerHTML = '<p class="not-found">Please enter a valid positive number.</p>';
        return;
    }

    const evenNumbers = [];
    for (let i = 0; i <= inputValue; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    resultDiv.innerHTML = `<p>Even Numbers up to ${inputValue}: ${evenNumbers.join(', ')}</p>`;
}

function refreshPage() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerHTML = '';
}
