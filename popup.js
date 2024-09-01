document.getElementById('generate').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById('number').textContent = randomNumber;
});
