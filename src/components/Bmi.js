 import { useState } from "react"; 
//  import './Bmi.css';
function Bmi(){
    
        const [weight, setWeight] = useState();
        const [height, setHeight] = useState();
        const [bmi, setBmi] = useState(0);
        const [BMI, setBMI] = useState('');
      
        function calculateBmi() {
          const heightInMeters = height / 100;
          const bmiResult = weight / (heightInMeters * heightInMeters);
          setBmi(bmiResult.toFixed(1));
      
          if (bmiResult < 18.5) {
            setBMI('Underweight');
          } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
            setBMI('Healthy');
          } else if (bmiResult >= 25 && bmiResult <= 29.9) {
            setBMI('Overweight');
          } else {
            setBMI('Obese');
          }
        }
      
    return(

        <div></div>
    );
  
    }


export default Bmi;