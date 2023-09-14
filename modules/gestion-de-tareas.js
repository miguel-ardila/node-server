const tareas = [];

function addTarea(indicador, descripcion) {
    tareas.push({ indicador, descripcion, completado: false });
}

function eliminarTarea(indicador) {
    const index = tareas.findIndex(tarea => tarea.indicador === indicador);
    if (index !== -1) {
        tareas.splice(index, 1);
    }
}

function completarTarea(indicador) {
    const tarea = tareas.find(tarea => tarea.indicador === indicador);
    if (tarea) {
        tarea.completado = true;
    }
}

function imprimirTarea() {
    console.log("Lista de tareas:");
    tareas.forEach(tarea => {
        const status = tarea.completado ? 'Completada' : 'Pendiente';
        console.log(`${tarea.indicador}: ${tarea.descripcion} - ${status}`);
    });
}

module.exports = {
    addTarea,
    eliminarTarea,
    completarTarea,
    imprimirTarea,
    tareas,
};