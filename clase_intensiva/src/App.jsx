import { Button } from "./components/Button";
import { Card, CardBody } from "./components/Card"
import { List } from "./components/List"

function App() {
  const list =['Tangiro','Ola','Pinki'];
  const list2 =['Goku','Pikachu'];
  const handleSelect = (elemento)=>{
    console.log('imprimiendo elemento',elemento);
    
  }
  const handleSelect2 = (elemento)=>{
    console.log('Mostrando elemento',elemento);
    
  }
  const handleClick = (e)=>{
    console.log(e.target.className);
     
    
  }
  //No hay problema de cero
  const contenido = list.length ? <List datas={list} onSelect={handleSelect}/> : 'Sin Elementos para mostrar'
  //Hay problema de cero
  const contenido2 = list2.length !== 0 && <List datas={list2} onSelect={handleSelect2}/>
  return (
    <>
      <Card>
        <CardBody title="ok" body="Hola mundo desde body" />
        {contenido}
        {contenido2}
        <Button onClick={handleClick} classButton="primary">
          Hola mundo
        </Button>
      </Card>
    </>
  );
}

export default App
