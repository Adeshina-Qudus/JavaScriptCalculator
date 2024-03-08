// let calculator = document.querySelector('.calculatorBody form')
document.addEventListener("DOMContentLoaded", function() {
    let clearButton = document.getElementById("clearButton");
    let numbersDisplay = document.getElementById("displayId");
    let resultDisplay = document.getElementById("resultDisplayId");
    let deleteNumber = document.getElementById("delete");
    let allButtons = document.querySelectorAll(".button");

    allButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            numbersDisplay.value += button.value;
        });
    });

    clearButton.addEventListener("click", function() {
        numbersDisplay.value = '';
        resultDisplay.value = '';
    });

    deleteNumber.addEventListener("click", function() {
        numbersDisplay.value = numbersDisplay.value.toString().slice(0, -1);
    });
});
