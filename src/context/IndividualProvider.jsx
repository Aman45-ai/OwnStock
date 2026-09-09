import React, { useState } from 'react'
import { IndividualContext } from './IndividualContext'

const IndividualProvider = ({children}) => {
    const [documents, setDocuments] = useState(JSON.parse(localStorage.getItem("documents"))|| [])
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))|| [])
    const [insurance, setInsurance] = useState(JSON.parse(localStorage.getItem("insurance"))|| [])
    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)

  return (
    <IndividualContext.Provider value={{products, setProducts, documents, setDocuments, insurance, setInsurance, registeredUsers, setRegisteredUsers, currentUser, setCurrentUser}}>
        {children}
    </IndividualContext.Provider>
  )
}

export default IndividualProvider
