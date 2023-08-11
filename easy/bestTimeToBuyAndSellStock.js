// Description
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Parameters
// given an array prices where prices[i] is the price of a given stock on that day

// Return
// return the max profit you can achieve if you buy stock on a single day and sell on a different day

// Example
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Input: prices = [7,6,4,3,1]
// Output: 0

// Pseudocode
// this problem can be solved with a sliding window
// first initalize your left and right pointers along with the max val at 0
// then while right pointer is < prices.length
// if prices[left] is less than prices[right] this is a valid profit 
// assign a variable to hold profit and update your max val 
// the else situation would be that the price at the left pointer is not less than the price at the right pointer so you update the left to = right which would reset the buying day
// after these cases the right pointer is incrementing to continue moving through the array
// in the end return the max 


// Time complexity: O(n) where n is the number of elements in the prices array

// Space complexity: O(1) since the space of the variables does not increase based on input size 



// My solution
var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let max = 0

    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left]
            max = Math.max(max, profit)
        }else{
            left = right
        }
        right++
    }
    return max
};