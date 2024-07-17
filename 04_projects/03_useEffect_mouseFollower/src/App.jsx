import { useEffect, useState } from 'react'

function FollowMouse () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // pointer move
  useEffect(() => {
    console.log('🪄 Hi from useEffect first line.', { enabled })

    //
    const handleMove = (event) => {
      console.log('Hi from handleMove function. This is the event parameter: ', event)
      const { clientX, clientY } = event

      // console.log('handleMove: ', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    // Suscribe un listener al window, que si enabled es true, permite el moviemiento del cursor.
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup
    return () => {
      console.log('🧹 Hi from the useEffect\'s cleanup function.')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // Change body Classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
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

function App () {
  const [isMounted, setIsMounted] = useState(true)

  const handleMountButton = () => {
    setIsMounted(!isMounted)
  }
  return (
    <>
      {isMounted && <FollowMouse />}
      <button
        onClick={handleMountButton}
        className='marginTop'
      >
        Mount FollowMouse
      </button>
    </>
  )
}

export default App
