import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Router } from './Router'

/*
describe('Router', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })
})
 */

// Este Render asi vacio, es bueno para validar
// que nuestro componente renderea.
//
describe('Router', () => {
  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
})
