import { addDoc, updateDoc } from 'firebase/firestore';
import React, {useState} from 'react'
import { postsFirebase } from '../config/firebase';
import 'firebase/firestore';


function TweetBox({user}) {

  const [content, setContent] = useState('');

  const handleChangePost = (e) =>{
      setContent(e.target.value);
  }

  const handleFileChange = (e) =>{
    console.log(e.target.files[0])
  }

  const addData = () =>{
    console.log('dd');
    const data = {
      content:content,
      displayName:user.displayName,
      photoURL:user.photoURL,
      email:user.email,
      createdAt: Date.now(),
      likes:['']
    }
    addDoc(postsFirebase, data)
      .then((docRef)=>{
        console.log(docRef)
        updateDoc(docRef, {id:docRef.id})
          .then(()=>console.log('ddd'))
        setContent('')
      })

      .catch((e)=>console.log(e))
    console.log(data);
  }

  return (
    <div className= 'mt-12 flex border-y'>
        <img className='ml-2 mt-2 h-16 rounded-full' src={user.photoURL} alt="" />
        <div className='flex flex-col w-full ml-2'>
          <textarea value={content} onChange={handleChangePost} className='w-full h-24' placeholder="What's happening?"  type="text"/>
          <input type='file'onChange={handleFileChange}/>
          <button type='submit' onClick={addData} className='text-white bg-blue-400 font-bold rounded-full w-32 h-8 self-end m-2'>Tweet</button>
        </div>
      </div>
  )
}

export default TweetBox
