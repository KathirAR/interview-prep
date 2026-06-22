function containsDuplicate(nums: number[]):boolean{
    let seen = new Set<number>();
    let length = nums.length;
    for(let i =0; i<length;i++){
        if(seen.has(nums[i]!)){
            return true;
        }
        seen.add(nums[i]!);
    }

    return false;
}

function containsDuplicateOptimised(nums:number[]):boolean{
    let set = new Set<number>(nums);
    if(set.size==nums.length) return false
    else return true;
}