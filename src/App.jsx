import Title from "./components/Title";
import Counter from "./components/Counter";

import NewYear from "./assets/newyear.jpg"

import "./App.css"
import useCowntdown from "./hooks/useCowntdown";

function App() {

  const [day, hour, minute, second] = useCowntdown("Jan 1, 2023 00:00:00");
 
  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title="Contagem Regressiva para 2023"/>
        <div className="cowntdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
        <div className="container-footer">
          <h2>- Feliz ano novo da familia</h2>
          <h2>~ Morais</h2><br />
          <p className="p"><b>Raul Morais, Lizandra Morais, Atylla Morais, Kevin de Bruyne Morais</b></p>
        </div>
      </div>
    </div>
  );
}

export default App
