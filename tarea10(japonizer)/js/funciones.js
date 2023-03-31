function japonizer(n) {

    let verificador="",
    primeravez=0,
    cartel="",
    letras =['a', 'e', 'i','o', 'u','A', 'E', 'I','O', 'U','n', 'N', ' ' ];

verificador=verificador.toString();

n=n.toString().split("");


for (var i = 0 ; i < n.length; i++) {

if(letras.includes(n[i]) ==false && letras.includes(n[i+1])==false){

	n[i]= n[i] +"u";
	
}
cartel=cartel +n[i];

}
cartel ="Konnichi wa, "+cartel+"-san";
console.log(cartel);


return cartel;


}