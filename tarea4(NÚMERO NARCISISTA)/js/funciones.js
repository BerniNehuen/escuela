function EsNarciso(n1){

let n2=n1;

n1 = n1.split("");

console.log(n1);
let total=0;
let multiTotal=0;
let aux=0;
for(let i=0 ; i<n1.length ; i++){
	aux = parseInt(n1[i]);
	multiTotal += Math.pow(aux,3);

}
if(multiTotal == parseInt(n2)){
	document.write("El numero " + n2 + " es un numero narciso");
	document.write("<br>");
}






	}