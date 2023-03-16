function EsDeficiente(n1){

let x, total=0 ,contador=0;
x=n1 / 2;

	for(let i=1 ; i<=x ; i++){

		if(n1%i==0){

		total+=n1;
		}

	}


	if (total<n1){
		document.write("Es deficiente")
	}

}