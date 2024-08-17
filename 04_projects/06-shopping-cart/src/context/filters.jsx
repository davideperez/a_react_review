import { createContext, useState } from 'react'

// 1. Crear el contexto (Este es el que tenemos que consumir)

export const FiltersContext = createContext()

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
