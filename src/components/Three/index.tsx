import { useContext, useState } from "react"

import UserContext from "../../contexts/user"

export function Three() {
  const { state, setState } = useContext(UserContext)
  const [email, setEmail] = useState<string>('')

  function handleEdit() {
    setState({
      ...state,
      email: email
    })
  }

  return (
    <div>
      <h6>Componente Three</h6>
      <form>
        <input 
          type="text"
          placeholder="Alterar Email"
          onChange={(e) => setEmail(e.target.value)} 
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