//Ques3: 
// an word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
// input s= "anagram" , t = "nagaram" >> output true ;

function isanagram(a ,b){
     // a.split("").sort().join("") === b.split("").sort().join("");  OR

     if(a.length !== b.length)return false;

     let obj1 = {};
     let obj2 = {};

     for(let i = 0 ; i <a.length ; i++){
        obj1[a[i]] = (obj1[a[i]] || 0)  +  1;
        obj2[a[i]] = (obj2[a[i]] || 0)  +  1;
     }

     for(const key in obj1){
        if(obj1[key] !== obj2[key]) return false;
     }
     return true;

}
console.log(isanagram("heye" , "heyee"));

// .split() => this function convert a string to array 
//.sort() => sort in ascending order.

/*
obj1 = {h:1 , e:2 , y:1}
obj2 ={h:1 , e:3 , y:1} 
hence false
*/

//FiNDING edge cases is very important;