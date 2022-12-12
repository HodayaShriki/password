import './App.css';
import {useState} from 'react';



function App() {
  const [pass,setpass] = useState("")
  const [strenth, check] = useState("")

  function handlepass(e){
    setpass((e.target.value))
    if ((pass.length)<3)
    check ("weak")
    if ((pass.length)>2) 
    check ("medium")
    if ((pass.length)>6)
    check ("strong")
    }
  
  return (
    <div className="App">
      <input type = "string" value = {pass} onChange ={handlepass}/>
      <button disabled={((pass.length)<3)}> Submit</button>
      <h1>{strenth}</h1>
    </div>
  );
}

export default App;
