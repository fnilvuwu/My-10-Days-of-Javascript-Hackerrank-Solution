/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const max_num = Math.max(...nums)
    while (nums.includes(max_num)) {
        nums.splice(nums.indexOf(max_num), 1);
    }
    return Math.max(...nums)
}

