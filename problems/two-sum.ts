function twoSum(nums: number[], target: number): number[] {

    let length = nums.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            let sum = nums[i]! + nums[j]!;
            if (sum === target) {
                console.log(i, j);
                return [i, j];
            }
        }
    }

    return [];
};

twoSum([2, 7, 11, 15], 9); // Output: [0, 1]


const seen = new Map<number, number>();
seen.set(5, 100);
seen.set(8, 200);

console.log(seen.has(5));   // what do you expect this to print?
console.log(seen.has(99));  // what about this?
console.log(seen.get(8)); 


function twoSumOptimized(nums: number[], target: number): number[] {
    let seen = new Map<number,number>();
    for(let i=0; i<nums.length;i++){
        let complement = target-nums[i]!;
        if(seen.has(complement)){
            seen.set(nums[i]!,i);
            return [seen.get(complement)!,i ]
        }
    }
    return[];
}

twoSumOptimized([2, 7, 11, 15], 9); // Output: [0, 1]