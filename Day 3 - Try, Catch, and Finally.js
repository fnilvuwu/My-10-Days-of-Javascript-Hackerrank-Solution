/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let newString = s.split("").reverse().join("");
        console.log(newString);

    }
    catch(err) {
        console.log(err.message);
        console.log(s);
    }
}

