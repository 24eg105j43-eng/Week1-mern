let smm = (arr,ele)=>{
for(let i =0;i<arr.length;i++){
  if(arr[i]==ele)
  return i;
}
return -1;
}
let ar = [90,78,65,98];
let ele=78;
let sm = smm(ar,ele);
if(sm!=-1)
console.log(`Element is at the index ${sm}`);
else
console.log(`Element is not found`);