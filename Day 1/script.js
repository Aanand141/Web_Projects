function celsiusToFahrenheit(celsius) {
            return ((celsius * 9 / 5) + 32);
        }
        document.getElementById("Enter").addEventListener("click", function () {
            const celsius = parseFloat(document.getElementById("Input").value);
            if (isNaN(celsius)) {
                alert("Please enter a valid number.");
                return;
            }
            const fahrenheit = celsiusToFahrenheit(celsius);
            document.querySelector(".output").value = ` ${fahrenheit} Fahrenheit.`;
        });