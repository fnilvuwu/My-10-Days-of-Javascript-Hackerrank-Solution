/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if (["a", "i", "u", "e", "o"].includes(s[i])) {
            console.log(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!(["a", "i", "u", "e", "o"].includes(s[i]))) {
            console.log(s[i]);
        }
    }
}

