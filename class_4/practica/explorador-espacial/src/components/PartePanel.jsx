export function PartePanel({nombre,valor}){
    return (
      <>
        <p className="panel__elmento">{nombre}: {valor}</p>
      </>
    );
}