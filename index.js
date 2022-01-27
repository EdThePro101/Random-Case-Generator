function convertToRandomCase(aString) {
    return Array.from(aString).map(function(c) {
        const chanceOfUppercase = Math.random();

        if (chanceOfUppercase >= 0.5) {
            return c.toUpperCase();
        } else {
            return c.toLowerCase();
        }
    }).join('');
}

window.onload = function() {
    const inputTa = document.getElementById("input_ta");
    const outputTa = document.getElementById("output_ta");

    const eventFunc = function(evt) {
        const inputText = inputTa.value;
        outputTa.value = convertToRandomCase(inputText);
    };
	
    inputTa.addEventListener("change", eventFunc);
    inputTa.addEventListener("keyup", eventFunc);
}
