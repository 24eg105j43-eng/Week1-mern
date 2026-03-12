let a =(x,y,z)=>{
if(x>y && x>z){
  return x;
}
else if(y>z)
  return y;
  
else 
  return z;
}
let res=a(20,25,30);
console.log(res,"is greater");
