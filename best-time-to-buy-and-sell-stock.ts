function maxProfit(prices:number[]):number{

    let minPrice = prices[0]!;
    let maxProfit = 0;
    let profit = 0; 

    for(let currentPrice of prices){
        if(currentPrice<minPrice!) minPrice = currentPrice;
        profit = currentPrice- minPrice;
        if(profit>maxProfit) maxProfit=profit;
    }

    return maxProfit;
}

maxProfit([6,7,9,4,12,5])