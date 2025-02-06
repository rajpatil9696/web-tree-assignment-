import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[name,setName]=useState("") ;
  const[gender,setGender]=useState("") ;
  const[number,setNumber]=useState() ;
  const[email,setEmail]=useState("") ;
  const[image,setImage]=useState("")


  useEffect(()=>{
    axios.get(" https://randomuser.me/api/?page=1&results=1&seed=abc").then((res)=>{
      console.log(res.data);
      setGender(res.data.results[0].gender);
      setName(res.data.results[0].name.first +"   "+res.data.results[0].name.last)
      setNumber(res.data.results[0].phone);
      setEmail(res.data.results[0].email)
      setImage(res.data.results[0].picture.large);
    })
  },[])

  return (
    <div className="App">
     <div className='main-div'>
      <div className='left-div'>
        <img src={image} className='image'></img>
      </div>
      <div className='right-div'>
        <div className='info'>
          <p>name :-</p>
          <p>{name}</p>
        </div>
        <div className='info'>
          <p>gender :-</p>
          <p>{gender}</p>
        </div>
        <div className='info'>
          <p>phone number :-</p>
          <p>{number}</p>
        </div>
        <div className='info'>
          <p>Email Address :-</p>
          <p>{email}</p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
