function EsFeliz(n) {
  let cartel="";
  function obtenerSiguienteNumero(num) {
    let suma = 0;
    while (num > 0) {
      let digito = num % 10;
      suma += digito ** 2;
      num = Math.floor(num / 10);
    }
    return suma;
  }

  function esFeliz(num) {
    let historial = new Set();
    while (num !== 1 && !historial.has(num)) {
      historial.add(num);
      num = obtenerSiguienteNumero(num);
    }
    return num === 1;
  }

  let numerosFelices = [];
  for (let i = 1; i <= n; i++) {
    if (esFeliz(i)) {
      numerosFelices.push(i);
    }
  }

  console.log("Números felices hasta", n, ":");
  console.log(numerosFelices);
  
  cartel = numerosFelices;
  return cartel;
}
