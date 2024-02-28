/*const argv = require('yargs')
   .usage('Uso: $0 <comando><entidad>[opciones]')
   .demandCommand(2)
   .command('create', 'Insertar un contacto nuevo')
   .command('read', 'Lectura de contactos')
   .command('update', 'Actualizar un contacto')
   .command('delete', 'Eliminar un contacto')
   .option('id', {
      type:'number',
      demandOption:false,
      describe: 'Id del contacto'
   })
   .option('n', {
      alias: 'nombre',
      type:'string',
      demandOption:false,
      describe: 'Nombre de pila del contacto'
   })
   .option('a', {
      alias: 'apellido',
      type:'string',
      demandOption:false,
      describe: 'Apellido del contacto'
   })
   .option('e', {
      alias: 'email',
      type:'string',
      demandOption:false,
      describe: 'Email del contacto'
   })
   .check ((argv, options) => {
      if(argv.id != null && isNaN(argv.id)){
         throw 'El valor del id tiene que ser un número';
      }
      return true;
   })
.argv
module.exports = argv;*/