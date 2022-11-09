import { useContext, useState } from "react"

import { One } from "./components/One"
import { Three } from "./components/Three"
import { Two } from "./components/Two"

import UserContext from "./contexts/user"

function App() {
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const { setState } = useContext(UserContext)

  function handleSubmit() {
    setState({ firstname, lastname, email })
  }

  return (
    <div>
      <h1>Componente Principal</h1>
      <form>
        <input 
          type="text"
          placeholder="Nome"
          onChange={(e) => setFirstname(e.target.value)} 
        />
        <input 
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => setLastname(e.target.value)} 
        />
        <input 
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="button" onClick={handleSubmit}>Enviar</button>
      </form>
      <hr />
      <h1>Componente Filhos</h1>
      <div>
        <One />
        <Two />
        <Three />
      </div>
    </div>
  )
}

export default App
