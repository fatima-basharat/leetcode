// Description
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index


// Parameters
// given an integer array nums, also given a target value which is an integer

// Return
// we want to retun the index of target if its found in the nums array if not return -1

// Example
//Input: nums = [4,5,6,7,0,1,2], target = 0
//Output: 4
//Input: nums = [4,5,6,7,0,1,2], target = 3
//Output: -1

// Pseudocode
// you can use two pointers here and binary search
// declare left and right pointers
// then in a while loop also declare a mid point and then first check if the target is equal to the mid point return mid
// then check if the left portion of the array is sorted
// if the left portion is sorted then check if the target in that range, so check if target is greater than or equal to nums[left] and if the target is less than nums[mid]
// if so that means the target is in the correct range so update the right to be mid - 1
// else left = mid + 1
// the next else condition means the right portion of the array was sorted
// in that portion now compare the target and see if target > nums[mid] and if target is <= nums[right] move the left pointer to mid + 1
// else right = mid - 1
// outside the while loop return -1 bc that means target was not in nums


// Time complexity: O(logn) since we implemented binary search

// Space complexity: O(1) constant space since we only declared new variables and didnt take up extra space


// My solution
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while( left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(nums[mid] === target){
            return mid
        }
        
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target < nums[mid]){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }else{
            if(target <= nums[right] && target > nums[mid]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return -1
}