function mediana(){
let a=[0];
let soporte=0;
let i=0;
let r=1;
let calc=0;
let cartel;
	while(r==1){
	soporte=parseInt(prompt("Ingrese los numeros para indicar la moda: ",""));
	
	if(isNaN(soporte)==false){
	a[i]=soporte;
	i=i+1;
	}
	else{	
		r=2;
	}

	}

	soporte=a.length;
	soporte=soporte/2;	
	if(Number.isInteger(soporte)==false){
		soporte=soporte+0.5;
		soporte=soporte-1;
		cartel=a[soporte];
	}else{
	calc=a[soporte];
	soporte=soporte-1;
	calc=calc+a[soporte];
	calc=calc/2;
	cartel=calc;
	}
console.log(a);
return cartel;
}