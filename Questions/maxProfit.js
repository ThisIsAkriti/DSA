// we need to cal the max profit by buying and selling the stock;
// [7,2,8] output : 6 ( by buying the stock at min 2 and selling at 8 8-2 = 6 max);

//approach :
// if(min < num) then the num becomes min ; 
// take profit default as 0; 
// num - min = profit

const maxProfit = (price) => {
    let min = price[0];
    let profit = 0;
    for(let i = 1; i<price.length ; i++){
        if(min > price[i]){
            min = price[i]
        }else{
            calcProfit = price[i] - min ;
            if(calcProfit > profit){
                profit = calcProfit;
            }
        }
    }
return profit;
}
console.log(maxProfit([7 , 1,5,4,2,3]));