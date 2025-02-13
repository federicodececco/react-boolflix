import { createContext, useContext, useState } from 'react'

const ActorDataContext = createContext()
const ActorProvider = ({ children }) => {
  const [actorList, setActorList] = useState([])
  return (
    <ActorDataContext.Provider value={{ actorList, setActorList }}>
      {children}
    </ActorDataContext.Provider>
  )
}
function useActorContext() {
  return useContext(ActorDataContext)
}
export { ActorProvider, useActorContext }
