import React, { useState } from 'react'
import { IndividualContext } from './IndividualContext'

const IndividualProvider = ({children}) => {
    const [documents, setDocuments] = useState([])
    const [products, setProducts] = useState([])
    const [insurance, setInsurance] = useState([])
  return (
    <IndividualContext.Provider value={{products, setProducts, documents, setDocuments, insurance, setInsurance}}>
        {children}
    </IndividualContext.Provider>
  )
}

export default IndividualProvider
