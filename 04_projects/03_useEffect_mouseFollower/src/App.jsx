import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('Effect.', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event

      console.log('handleMove: ', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  const handleActivarSeguirPuntero = () => {
    setEnabled(!enabled)
  }

  const buttonText = enabled ? 'Desactivar' : 'Activar'
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button
        onClick={handleActivarSeguirPuntero}
      >
        {buttonText} Seguir Puntero
      </button>
    </main>
  )
}

export default App
