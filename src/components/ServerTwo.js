import React, { useState, useEffect } from 'react';

function SeverTwo() {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:5000/about')
      .then(res=> res.text())
      .then(data => setMessage(data))
      .catch(error => console.error(error));
  }, []);
  
    console.log(message)
  return (
    <div className='App'>
     <h1>{message}</h1>
    </div>
  );
}

export default  SeverTwo;