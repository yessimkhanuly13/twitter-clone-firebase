import { createContext, useState } from 'react'
import './App.css'
import { signInWithGoogle, authFirebase } from './config/firebase'
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './components/SigIn'

export const User = createContext();

function App() {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});



  const signIn = () =>{
      signInWithGoogle()
        .then((result)=>{
          console.log(result)
          setAuth(true);
          setUser(result.user)
        })
        .catch((error)=>{
          console.log(error)
        })
  }


  const signOut = () =>{
    authFirebase.signOut()
      .then(()=>setAuth(false))
  }
  


  return (
    <>
      { !auth ? (
        <div className='flex justify-center items-center h-screen'>
            <SignIn signInWithGoogle={signIn}/>
        </div> 
        ) : (
        <div className='grid grid-cols-4'>
          <Sidebar user={user} signOut={signOut}/>

          <div className='col-span-2'>
            <Routes>
              <Route path='/' element={<Home user={user}/>}/>
              <Route path='/profile/:username' element={<Profile user={user}/>}/>
            </Routes>
          </div>
          <div>
            <p className='fixed'></p>
            
          </div>
        </div>
      )}
    </>
  )
}

export default App
            