// Importa el módulo readline para gestionar la entrada y salida de la consola.
const readline = require('readline');

// Importa las funciones de gestión de tareas desde otro módulo.
const { addTarea, eliminarTarea, completarTarea, imprimirTarea } = require('./gestion-de-tareas');

// Crea una interfaz readline para interactuar con la consola.
const rl = readline.createInterface({
  input: process.stdin,    // Utiliza la entrada estándar (teclado) como entrada.
  output: process.stdout  // Utiliza la salida estándar (consola) como salida.
});

// Función principal que inicia la interfaz de usuario.
function initUI() {
  // Pregunta al usuario qué tarea desea realizar.
  rl.question('¿Qué tarea deseas realizar? (add/remove/complete/print/exit): ', function(action) {
    if (action === 'exit') {
      // Si el usuario ingresa 'exit', cierra la interfaz y finaliza el programa.
      rl.close();
    } else if (action === 'add') {
      // Si el usuario ingresa 'add', solicita el indicador y descripción de la nueva tarea,
      // luego llama a la función addTarea para agregarla y muestra la lista actual de tareas.
      rl.question('Indicador de la tarea: ', function(indicador) {
        rl.question('Descripción de la tarea: ', function(descripcion) {
          addTarea(indicador, descripcion);
          imprimirTarea();
          initUI(); // Llama a initUI nuevamente para continuar interactuando.
        });
      });
    } else if (action === 'remove') {
      // Si el usuario ingresa 'remove', solicita el indicador de la tarea a eliminar,
      // luego llama a la función eliminarTarea para eliminarla y muestra la lista actual de tareas.
      rl.question('Indicador de la tarea a eliminar: ', function(indicador) {
        eliminarTarea(indicador);
        imprimirTarea();
        initUI(); // Llama a initUI nuevamente para continuar interactuando.
      });
    } else if (action === 'complete') {
      // Si el usuario ingresa 'complete', solicita el indicador de la tarea completada,
      // luego llama a la función completarTarea para marcarla como completada y muestra la lista actual de tareas.
      rl.question('Indicador de la tarea completada: ', function(indicador) {
        completarTarea(indicador);
        imprimirTarea();
        initUI(); // Llama a initUI nuevamente para continuar interactuando.
      });
    } else if (action === 'print') {
      // Si el usuario ingresa 'print', muestra la lista actual de tareas.
      imprimirTarea();
      initUI(); // Llama a initUI nuevamente para continuar interactuando.
    } else {
      // Si el usuario ingresa una acción no válida, muestra un mensaje de error y vuelve a preguntar.
      console.log('Acción no válida.');
      initUI(); // Llama a initUI nuevamente para continuar interactuando.
    }
  });

  // Maneja el evento de cierre de la interfaz readline.
  rl.on('close', function() {
    console.log('¡Hasta luego!');
    process.exit(0); // Finaliza el programa.
  });
}

// Exporta la función initUI para que pueda ser utilizada desde otros módulos.
module.exports = {
  initUI,
};
