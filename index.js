'use strict';

function bubbleSort (nums) {
  for (var i = 0; i < nums.length; i++){
    for(var j = 0; j < nums.length; j++){
      if(nums[i] < nums[j] && i !== j){
        var temp = temp;
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(bubbleSort([10,4,3,2,6,7,9,1,5,8]));
