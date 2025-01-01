// create array with startNum and end Num 
// we will push the end num always cause it'll change ;
function createArr( startNum , endNum){
    if(startNum > endNum){
        return [];
    }else{
        const numbers = createArr(startNum , endNum-1);
        numbers.push(endNum);
        return numbers;
    }

}
console.log(createArr(0 , 5))