import { useEffect, useState } from 'react'
import './App.css'
import { app, signInWithGoogle } from './config/firebase'

function App() {

  const [auth, setAuth] = useState(false);

  const signIn = () =>{
      signInWithGoogle();
      setAuth(true);
  }

  useEffect(()=>{
    console.log(app)
  })

  return (
    <>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
      <br></br>
      { !auth && (<button onClick={signIn}>Sign in with Google</button>)}
    </>
  )
}

export default App
