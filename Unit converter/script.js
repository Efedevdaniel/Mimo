function convert() {
            const inputValue = parseFloat(document.getElementById("userInput").value);
            const unit = document.getElementById("unit").value;
            let result = 0;

            if (unit === 'milesToKm') {
                result = inputValue * 1.60934;
            } else {
                result = inputValue / 1.60934;
            }

            const resultString = `${inputValue} ${unit === 'milesToKm' ? 'miles' : 'kilometers'} are ${result.toFixed(2)} ${unit === 'milesToKm' ? 'kilometers' : 'miles'}`;
            document.getElementById('resultElement').innerHTML = resultString;
        }
