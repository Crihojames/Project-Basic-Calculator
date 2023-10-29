const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonvalue = buttonsEl[i].textContent;

        if (buttonvalue === "C") {
            clearResult();
        } else if (buttonvalue === "=") {
            calculateResult();
        } else{
            appendValue(buttonvalue);
        }
    });
}


function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonvalue) {
    inputFieldEl.value += buttonvalue
}