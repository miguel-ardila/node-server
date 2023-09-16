const tareas = [];

//funcion para agregar una nueva tarea al arreglo 'tareas'
function addTarea(indicador, descripcion) {
    tareas.push({ indicador, descripcion, completado: false });
}

//fucnion para eliminar uan tarea del arreglo 'tareas' por indicador
function eliminarTarea(indicador) {
    //Busca la tarea en el arreglo y obtiene el indice
    const index = tareas.findIndex(tarea => tarea.indicador === indicador);
    if (index !== -1) {
        //si se encontro la tarea, se elimina el arreglo
        tareas.splice(index, 1);
    }
}

//funcion para marcar una tarea como completada por el indicador
function completarTarea(indicador) {
    //Busca la tarea en el arreglo por su identificador
    const tarea = tareas.find(tarea => tarea.indicador === indicador);
    if (tarea) {
        //si se encontro la tarea, se marca como completada cambiando el valor de 'completado' a true
        tarea.completado = true;
    }
}

//funcion para imprimir la lista de tareas con su estado(completado o pendiente)
function imprimirTarea() {
    console.log("Lista de tareas:");
    tareas.forEach(tarea => {
        //determinar el estado de la tarea (completado o pendiente) y lo muestra en consola
        const status = tarea.completado ? 'Completada' : 'Pendiente';
        console.log(`${tarea.indicador}: ${tarea.descripcion} - ${status}`);
    });
}

// Exporta las funciones y el arreglo 'tareas' para que puedan ser utilizados por otros módulos.
module.exports = {
    addTarea,
    eliminarTarea,
    completarTarea,
    imprimirTarea,
    tareas,
};