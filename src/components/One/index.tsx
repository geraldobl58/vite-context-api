import { useContext, useState } from "react"

import UserContext from "../../contexts/user"

export function One() {
  const { state, setState } = useContext(UserContext)
  const [firstname, setFirstname] = useState<string>('')

  function handleEdit() {
    setState({
      ...state,
      firstname: firstname
    })
  }

  return (
    <div>
      <h6>Componente One</h6>
      <form>
        <input 
          type="text"
          placeholder="Alterar Nome"
          onChange={(e) => setFirstname(e.target.value)} 
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