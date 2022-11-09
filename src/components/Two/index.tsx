import { useContext, useState } from "react"

import UserContext from "../../contexts/user"

export function Two() {
  const { state, setState } = useContext(UserContext)
  const [lastname, setLastname] = useState<string>('')

  function handleEdit() {
    setState({
      ...state,
      lastname: lastname
    })
  }

  return (
    <div>
      <h6>Componente Two</h6>
      <form>
        <input 
          type="text"
          placeholder="Alterar Sobrenome"
          onChange={(e) => setLastname(e.target.value)} 
        />
        <button type="button" onClick={handleEdit}>Alterar</button>
        <hr />
        <p>Nome: {state.firstname}</p>
        <p>Sobrenome: {state.lastname}</p>
        <p>Email: {state.email}</p>
      </form>
    </div>
  )
}