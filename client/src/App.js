import axios from "./axios"
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [room,setRoom] =useState([])

  useEffect(()=>{
    axios.get('/room')
    .then(response => {
      setRoom(response.data)
    })
  },[]);

  console.log('Room_Data', room); 
  
  return (
    <>
    <div clasNam="App">
      <h1> Hello Worlds </h1>
    </div>
    </>
  );
}  

export default App;
