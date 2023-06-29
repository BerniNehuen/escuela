class CEmpleado{
	constructor(nombre,ingreso,direccion,salario){
		this.nombre=nombre;
		this.ingreso=ingreso;
		this.direccion=direccion;
		this.salario=salario;
	}

    mostrardatos(){
    let text1="Nombre";
    let text2=" | año de ingreso";
    let text3=" | direccion";
    let text4=" | salario"
    let buscar="WallStreet";
    let text11=this.nombre;
    let text22=this.ingreso;
    let text33=this.direccion;
    let text44=this.salario;
    let cartel;
    let text5;
    let text6=text1+text2+text3+text4+"<br>";

    if(text1.length>text11.length){
    	for (let i = text11.length ; i < text1.length; i++) {
    		text11=text11+"//";
    	}
	}
	    if(text2.length>text22.length){
    	for (let i = text22.length ; i < text2.length; i++) {
    		text22=text22+"//";
    	}
	}
	    if(text3.length>text33.length){
    	for (let i = text33.length ; i < text3.length; i++) {
    		text33=text33+"//";
    	}
	}
	if(text33.includes(buscar)==true){
	cartel="vive en WallStreet";
	}else{
	cartel="no vive en WallStreet";
	}
	text5=text6+text11+text22+text33+"/////"+text44+"<br>"+cartel;
    return text5;

  	
    }
  

  
}

