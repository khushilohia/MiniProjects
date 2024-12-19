let buttons = document.querySelectorAll(".operator, .number, .decimal, .clear");
let answer = "";
let msg = document.querySelector("#msg");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            try {
                const result = eval(answer);
                answer = result;
            }
            catch (err) {
                answer = "Invalid";
            }
        }
        else if (e.target.innerHTML === '.') {
            if (!answer.includes('.')) {
                answer += e.target.innerHTML;
            }
        }
        else if (e.target.innerHTML === 'C') {
            answer = '';
        }
        else {
            answer += e.target.innerHTML;
        }

        msg.value = answer;

    }
    );
});
