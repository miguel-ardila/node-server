// puntodeentrada.js
const readline = require('readline');
const { addTarea, eliminarTarea, completarTarea, imprimirTarea } = require('./gestion-de-tareas');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function initUI() {
  rl.question('¿Qué tarea deseas realizar? (add/remove/complete/print/exit): ', function(action) {
    if (action === 'exit') {
      rl.close();
    } else if (action === 'add') {
      rl.question('Indicador de la tarea: ', function(indicador) {
        rl.question('Descripción de la tarea: ', function(descripcion) {
          addTarea(indicador, descripcion); 
          imprimirTarea(); 
          initUI();
        });
      });
    } else if (action === 'remove') {
      rl.question('Indicador de la tarea a eliminar: ', function(indicador) {
        eliminarTarea(indicador); 
        imprimirTarea();
        initUI();
      });
    } else if (action === 'complete') {
      rl.question('Indicador de la tarea completada: ', function(indicador) {
        completarTarea(indicador); 
        imprimirTarea(); 
        initUI();
      });
    } else if (action === 'print') {
      imprimirTarea();
      initUI();
    } else {
      console.log('Acción no válida.');
      initUI();
    }
  });

  rl.on('close', function() {
    console.log('¡Hasta luego!');
    process.exit(0);
  });
}

module.exports = {
  initUI,
};
