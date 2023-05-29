import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

    //  let num = () =>{
    //     return 2 + 3;
    //  }
    //  console.log(num);
   const [num1, setNum1] = useState();
   const [num2, setNum2] = useState();
   const [sum, setSum] = useState(0);
   const add = (e) =>{
            e.preventDefault();
    setSum (parseInt(num1) + parseInt(num2));
   }
  //  console.log(num1);
  return (

<div> 
  <form onSubmit={add}> 
  <div>
  <label> Enter the number </label>
      <input type='text' id='num1' value={num1} onChange={(event) => setNum1(event.target.value)}></input>
  </div> <br></br>
  <div>
  <label> Enter the number </label>
      <input type='text' id='num2' value={num2} onChange={(event) => setNum2(event.target.value)}></input>
  </div> <br></br>
      
      <input type='submit'></input>

  </form>
       <p> {sum} </p>
   
       </div>

//  <p> this is the first react</p>
// <p> {num()} </p>
// <p>  {num1}</p> 

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
