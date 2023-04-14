function antivirus(x,r) {
let cartel="",
clon=x;

clon=clon.toString().split("");

console.log(clon);

for(let j=0;j<x.length;j++){

  if(x[j]==r[0] && x[j+2]==r[0] && x[j+1]==r[2]){


    clon[j+1]="";

  }

cartel=cartel +clon[j];



}

console.log(clon);

cartel =cartel.length +"<br>"+cartel;
return cartel;


}