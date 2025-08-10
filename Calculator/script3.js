var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var value = button.textContent;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});
