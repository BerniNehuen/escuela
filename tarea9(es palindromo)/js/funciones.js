function esPalindromo(n) {
console.log(n);
let n1,n2,cartel,espal=0;

n1 = n.split("").reverse();

n2=n.split("");



console.log(n2);
console.log(n1);

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
console.log(cartel);

}