function esGrito(x) {




    let verificador, contadordeletras = 0,
        contadordesignos = 0,
        cartel,
        letras = RegExp(/[a-z]/i);
    for (let i = 0; i < x.length; i++) {
        verificador = x[i];
        for (let x=65;x<90;x++) {
        	
            if (verificador == String.fromCharCode(x) ) {

                contadordeletras++;
            } 

        }

         for (let x=97;x<122;x++) {
         	
            if (verificador == String.fromCharCode(x) ) {

                contadordeletras++;
            } 

        }

        if(verificador=="!"){
        	contadordesignos++;
        }


    }
 if (contadordesignos<contadordeletras){
 	cartel="escrito"+"<br>";
 }
 if (contadordesignos>contadordeletras){
 	cartel = "ESGRITO"+"<br>";
 }

return cartel;


}