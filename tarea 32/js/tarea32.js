function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class CPassword {

    constructor(password) {
        this.password = password;
    }
    esFuerte() {
        let abcedariominuscula = "abcdefghijklmnñopqrstuvwxyz",
            abcedariomayuscula = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            listanumeros = "1234567890",
            cartel = "";
        let cuentamayusculas = 0,
            cuentaminusculas = 0,
            cuentanumeros = 0;
        for (let i = 0; i <= this.password.length; i++) {

            if (abcedariominuscula.includes(this.password[i]) == true) {
                cuentaminusculas = cuentaminusculas + 1;
            }
            if (abcedariomayuscula.includes(this.password[i]) == true) {
                cuentamayusculas = cuentamayusculas + 1;
            }
            if (listanumeros.includes(this.password[i]) == true) {
                cuentanumeros = cuentanumeros + 1;
            }

        }
        if (cuentanumeros >= 5 && cuentamayusculas >= 2 && cuentaminusculas >= 1) {
            cartel = "La contraseña es segura";
        } else {
            cartel = "La contraseña no es segura"
        }

        return cartel;
    }
    generarPassword() {
        let abcedariominuscula = "abcdefghijklmnñopqrstuvwxyz",
            abcedariomayuscula = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            listanumeros = "1234567890",
            passwordgenerda = "",
            cartel = "";
        let selector = 0;

        while(passwordgenerda.length<16){
        selector = getRandomInt(4);
        if (selector == 1) {
        	let x=0;
        	x = getRandomInt(26);
            passwordgenerda = passwordgenerda + abcedariominuscula[x];
        }
        if (selector == 2) {
        	let y=0;
        	y = getRandomInt(26);
            passwordgenerda = passwordgenerda + abcedariomayuscula[y];
        }
        if (selector == 3) {
        	let z=0;
        	z = getRandomInt(9);
            passwordgenerda = passwordgenerda + listanumeros[z];
        }
        }
        return passwordgenerda;
    }

}