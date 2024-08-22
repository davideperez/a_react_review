import { createContext, useState } from 'react'

// 1. Crear el contexto (Este es el que tenemos que consumir)
// El useContext es un Singleton, ya que se crea una sola vez y luego es consumido globalmente
// (o en el marco de su provider.).

export const FiltersContext = createContext() // solo se crea 1 vez

// 2. Proveer el contexto; crear el provider.

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
