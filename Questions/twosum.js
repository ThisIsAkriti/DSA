// input : [2 ,7,4,1] , target = 9
// output : [0, 1]
// input : [2 ,7,4,1] , target = 5
// output : [2, 3]

const twosum = (arr , target) => {
    const obj = {};

    for(let i = 0 ; i < arr.length; i++){
        var n = arr[i];

        if(obj[target-n]  >= 0){
            return [obj[target-n], i];
        }else {
            obj[n] = i;
        }
    }
}
console.log(twosum([2,4,6,7], 9));

// obj[4] = i.e 4 is in obj? if yes it returns the index of 4 from obj 