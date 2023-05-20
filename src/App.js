import './App.css';
import imagen from "./conejo.jpg";


function App() {
  let nombre=[{name:"Jab",edad:19},{name:"Pedrin",edad:3}];
  let caja =<div>nombre</div>;
  return (
    <div className="fondo">
      <h1>{nombre.edad}</h1>
     <img src={imagen} className="img"/>
     
     <input value={nombre[1].name}/>
      <br/>
    </div>
  );
}

export default App;
