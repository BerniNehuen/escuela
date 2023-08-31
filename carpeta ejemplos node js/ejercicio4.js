const os = require('os')

console.log('Espacio libre:' + os.freemem())

const vec=[]

for (let f=0; f < 1000000;f++){
	vec.push(f)
}

console.log("memoria libre despudes del vector " + os.freemem())