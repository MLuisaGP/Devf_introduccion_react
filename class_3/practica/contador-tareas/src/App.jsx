
import './App.css'
import { useState, useEffect, useMemo } from 'react';

function App() {

  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) || []);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtrar, setFiltro] = useState(false);

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [tareas]);  // Se ejecuta cada vez que las tareas cambian

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  const hacerFiltro = useMemo(() => {
    if (filtrar) {
      return tareas.filter((tarea) => tarea.duracion > 30)
    } else {
      return tareas
    }
  }, [filtrar, tareas])

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion && duracion >= 0) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };

      let task = [...tareas, nuevaTareaObj];
      localStorage.setItem('tareas', JSON.stringify(task))
      setTareas(task);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div className='main'>
      <h1>Contador de Tareas</h1>
      <div>
        <section className="titulo">
          <h2>Tareas</h2>

          <button onClick={() => setFiltro(!filtrar)}>Mayores de 30 minutos</button>
        </section>

        <section className="tareas">
          <ol>
            {hacerFiltro.map((tarea, index) => (
              <li key={index}>
                <div>
                  <span>{tarea.nombre}:</span>
                  <span>{tarea.duracion} minutos</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>

        <section className="form-new">
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nombre de la tarea"
          />
          <input
            type="number"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            placeholder="Duración en minutos"
          />
          <button className='add-task' onClick={agregarTarea}>+</button>
        </section>
      </div>
    </div>
  );
}
export default App
