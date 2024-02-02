// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const date = new Date(dateString);
    dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

    return dayName;
}

