 import { useState } from "react"; 
function Bmi(){
    
        const [weight, setWeight] = useState(0);
        const [height, setHeight] = useState(0);
        const [bmi, setBmi] = useState(0);
        const [category, setCategory] = useState('');
      
        function calculateBmi() {
          const heightInMeters = height / 100;
          const bmiResult = weight / (heightInMeters * heightInMeters);
          setBmi(bmiResult.toFixed(1));
      
          if (bmiResult < 18.5) {
            setCategory('Underweight');
          } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
            setCategory('Healthy');
          } else if (bmiResult >= 25 && bmiResult <= 29.9) {
            setCategory('Overweight');
          } else {
            setCategory('Obese');
          }
        }
      
    return(

        <div>
        <h1>BMI Calculator</h1>
        <label htmlFor='weight'>Weight:</label>
        <input
          type='number'
          id='weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
  
        <label htmlFor='height'>Height:</label>
        <input
          type='number'
          id='height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
  
        <button onClick={calculateBmi}>Calculate BMI</button>
  
        <p>Your BMI is: {bmi}</p>
        <p>Your category is: {category}</p>
      </div>
    );
  
    }


export default Bmi;