const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// const [ ,,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base);

// const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow) )
    .catch( err => console.log(err) );
