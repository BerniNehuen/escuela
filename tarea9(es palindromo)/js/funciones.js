function esPalindromo(n) {

let n1,n2,cartel,espal=0;

n1 = n.split("").reverse();

n2=n.split("");





for(let i =0; i<n.length;i++){

if (n2[i]!=n1[i]) {

espal++;
}


}

if(espal>0){
    cartel="no es palindromo";
}else if(espal==0){

    cartel="Es palindromo";
}
return (cartel);


}