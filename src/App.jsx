import { useEffect } from 'react'
import './App.css'
import { app } from './config/firebase'

function App() {

  useEffect(()=>{
    console.log(app)
  })

  return (
    <>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
    </>
  )
}

export default App
