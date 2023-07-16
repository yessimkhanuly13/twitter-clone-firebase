import { useEffect, useState } from 'react'
import './App.css'
import { app, signInWithGoogle, authFirebase, postsFirebase } from './config/firebase'
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './components/SigIn'
import {getDocs} from 'firebase/firestore'


function App() {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);


  const getCoordinates = async() =>{
    //get coordinates from firestore
    const data = await getDocs(postsFirebase);
    setPosts(data.docs.map((doc)=>({
      ...doc.data(),
      id : doc.id
    })))

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



  useEffect(()=>{
    getCoordinates();
  })

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
              <Route path='/' element={<Home user={user} posts={posts}/>}/>
              <Route path='/profile/:username' element={<Profile user={user} posts={posts}/>}/>
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
            