import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [linea1, setLinea1] = useState([]);
  const [linea2, setLinea2] = useState([]);
  const [memeImage, setMemeImage] = useState([]);

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }

  const onChangeMemeImage = function (evento) {
    setMemeImage(evento.target.value)
  }
  
  return (
    <div className="App">
      <select onChange={onChangeMemeImage}>
        <option value="CasaEnLlamas">Casa en llamas</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Filosoraptor</option>
      </select><br />
      {/* Select picker meme */}
      {/* Input text - Primera linea
      Input text - segunda linea
      Boton exportar */}
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br />
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br />
      <button>Exportar</button>

      <div>
        <span>{linea1}</span><br />
        <span>{linea2}</span><br />
        <img src={"./img/" + memeImage + ".jpg"} alt="memeImage" />
      </div>

    </div>
  )
}

export default App
