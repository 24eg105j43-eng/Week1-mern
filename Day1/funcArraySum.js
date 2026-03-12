let s = (arr)=>{
  let sum=0;
for(let i =0;i<arr.length;i++){
  sum = sum + arr[i];
 
}
 return sum;
}
let arr = [90,78,65,98];
let sum = s(arr);
console.log(`sum of elemnts in array is ${sum}`);


