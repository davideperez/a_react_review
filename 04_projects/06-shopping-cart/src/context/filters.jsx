import { createContext } from 'react'

// 1. Crear el contexto (Este es el que tenemos que consumir)

export const FiltersContext = createContext()

// 2. Proveer el contexto; crear el provider.

export function FiltersProvider ({ children }) {
  return (
    <FiltersContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
