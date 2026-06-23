function twoSum(numbers:number[],target:number):number[]{

    let seen = new Map<number,number>();

    for(let i= 0; i<numbers.length;i++ )
        {
        let complement = target - numbers[i]!;
        if(seen.has(complement))
            {
                return [seen.get(complement)!, i]

            }    
        seen.set(numbers[i]!,i);
        }
    return []
}


function containsDuplicate1(numbers:number[]):boolean{
    let set = new Set(numbers);
    if(set.size===numbers.length) return false
    return true
}

function contDup(numbers:number[]):boolean{
    let set = new Set<number>();

    for(let num of numbers){
        if (set.has(num)) return true;
        else set.add(num);
    }
    return false;
}

function bestBuy(prices:number[]):number{

    let buyPrice = prices[0];
    let maxProfit = 0;

    for(let currentPrice of prices){
        if (currentPrice<buyPrice!) buyPrice = currentPrice;
        let profit = currentPrice - buyPrice!;
        if(profit>maxProfit) maxProfit= profit;
    }
    return maxProfit;
}

function valAagram(s:string,t:string):boolean{

    if(s.length!=t.length) return false;
    let mapS = new Map<string,number>();
    for(let char of s){
        if (!mapS.has(char)) mapS.set(char,1);
        else{
            let count = mapS.get(char)!;
            mapS.set(char,count+1);
        }
    }

    for(let char of t){
        if(!mapS.has(char)) return false;
        else{
            let count = mapS.get(char)!;
            mapS.set(char,count-1);
        }
        if(mapS.get(char)===0) mapS.delete(char);
    }

    return mapS.size==0;

}