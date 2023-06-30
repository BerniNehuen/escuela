
class CPersona{
	constructor(nombre,fechadenacimiento,dni,genero,peso,altura){
		this.nombre=nombre;
		this.fechadenacimiento=fechadenacimiento;
		this.dni=dni;
		this.genero=genero;
		this.peso=peso;
		this.altura=altura;
	}
	calcularIMC(){
	let pasarametros=this.altura/100;
	pasarametros=pasarametros*pasarametros;
	pasarametros=this.peso /pasarametros;
	let cartel;
	if(pasarametros>25){
	cartel="sobrepeso";
	}
	if(pasarametros<20){
	cartel="Bajo peso";
	}
	if(pasarametros>=20&& pasarametros<=25){
	cartel="Peso ideal"
	}
	return cartel;
	}
   	EsMayorDeEdad(){

   	}
  	ComprobarGenero(){
  	let comprobar=this.genero;
  	let cartel;
  	if(comprobar=="M"||comprobar=="m"){
  	cartel="El genero es masculino";
  	}
  	if(comprobar=="F"||comprobar=="f"){
  	cartel="El genero es femenino";
  	}
  	if(comprobar=="O"||comprobar=="o"){
  	cartel="El genero es otro";
  	}
  	if(comprobar!="M"&&comprobar!="m"&&comprobar!="F"&&comprobar!="f"&&comprobar!="O"&&comprobar!="o"){
  	cartel="Desconozco la existencia del genero indicado ya lo agregaremos a nuestra base de datos, lamentamos las molestias";
  	}
  	return cartel;
 	}

  
}