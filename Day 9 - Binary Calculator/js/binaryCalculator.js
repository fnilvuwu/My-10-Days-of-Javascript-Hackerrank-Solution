// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the pressed button has an ID of "C" and clear the "res" div if true
        if (button.id === 'btnClr') {
            document.getElementById('res').innerHTML = '';
        }
        else if (button.id === 'btnEql') {
            var expr = document.getElementById('res').innerHTML;
            var nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            document.getElementById('res').innerHTML = eval(expr).toString(2);
        }
        else {
            // Append the pressed button content to the "res" div
            document.getElementById('res').innerHTML += button.textContent;
        }
    });
});
