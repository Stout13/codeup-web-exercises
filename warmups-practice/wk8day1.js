// Write a function that takes an array of numbers as argument and returns the number of negative values in the array

var numbers = [1,-2,2,-4];

function numArray(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]<0) {
            count++;
        }
    }
    return count;
}


numArray(numbers);