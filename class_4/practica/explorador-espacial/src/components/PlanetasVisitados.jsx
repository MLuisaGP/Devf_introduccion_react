
export function PlanetasVisitados({planetas=[]}){

    return (
      <div className="planetas_visitados">
        <h3>Planetas visitados</h3>
        <ul>
          {planetas.map((planeta) => (
            <li key={planeta.id}>
              <span>{planeta.name}:</span>
              {planeta.description}
            </li>
          ))}
        </ul>
      </div>
    );
}
