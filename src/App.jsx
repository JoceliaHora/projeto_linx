import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header"
import  Ajude from "./components/ajude/Ajude"
import Produtos from "./components/produtos/Produtos"
import Compartilhe from "./components/compartilhe/Compartilhe"
import Rodape from "./components/rodape/Rodape"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Ajude />
     <Produtos />
     <Compartilhe />
     <Rodape />


    </div>
  )
}

export default App
