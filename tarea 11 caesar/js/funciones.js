function caesar(x,r) {

let index = 0,
i = 1,
total="",
pa=0,
sehizo=0,
cartel="",
r2=r;
for(let j=0;j<x.length;j++){

    sehizo=0;
    i = x[j].charCodeAt(index);
    console.log(i);
    
    
    r = parseInt(r2);
    r= i + r ;
   	console.log(r);
   	
   	while(sehizo==0){
   	if(r<123){
    pa=String.fromCharCode(r);
    console.log(pa);
    console.log(total);
    cartel=pa+cartel;

    sehizo++;
    }else{
    r = r-26;
    console.log(r);
    }
    }
}



return cartel;



}