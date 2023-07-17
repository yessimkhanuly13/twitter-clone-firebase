import React, {useState} from 'react'

function TweetBox({user, setTweetBox}) {

  const [content, setContent] = useState('');

  const handleChangePost = (e) =>{
      setContent(e.target.value);
  }

  const addData = () =>{
    console.log('dd');
    const data = {
      content:content,
      displayName:user.displayName,
      photoURL:user.photoURL,
      email:user.email,
      time: Date.now()
    }

    console.log(data);
  }

  return (
    <div className= 'mt-12 flex border-y'>
        <img className='ml-2 mt-2 h-16 rounded-full' src={user.photoURL} alt="" />
        <div className='flex flex-col w-full ml-2'>
          <textarea onChange={handleChangePost} className='w-full h-24' placeholder="What's happening?"  type="text"/>
          <button onClick={addData} className='text-white bg-blue-400 font-bold rounded-full w-32 h-8 self-end m-2'>Tweet</button>
        </div>
      </div>
  )
}

export default TweetBox
