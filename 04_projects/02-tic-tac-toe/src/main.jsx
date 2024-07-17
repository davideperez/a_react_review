import { React, Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function onRender (id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
  console.log('<<<<<<<<<<<<<<     >>>>>>>>>>>>>>>>>>>>>')
  console.log('id: ', id)
  console.log('phase: ', phase)
  console.log('actualDuration: ', actualDuration)
  console.log('baseDuration: ', baseDuration)
  console.log('startTime: ', startTime)
  console.log('commitTime: ', commitTime)
  console.log('<<<<<<<<<<<<<<     >>>>>>>>>>>>>>>>>>>>>')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Profiler id='App' onRender={onRender}>
    <App />
  </Profiler>
  // </React.StrictMode>
)
