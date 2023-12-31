import { createContext, useRef, useState } from 'react'
import './App.css'
import { signInWithGoogle, authFirebase } from './config/firebase'
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SigIn from './components/SignIn';

export const User = createContext();

function App() {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const inputRef = useRef(null);

  const handleFocusButtonClick = ()=>{
    console.log(inputRef.current);
    inputRef.current.focus();
  }

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
            <SigIn signInWithGoogle={signIn}/>
        </div> 
        ) : (
        <div className='grid grid-cols-4'>
          <Sidebar user={user} signOut={signOut} inputFocus={handleFocusButtonClick}/>

          <div className='col-span-2'>
            <Routes>
              <Route path='/' element={<Home user={user} inputRef={inputRef}/>}/>
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
            