import { useEffect, useState } from "react";

function AjaxApi (){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect (() =>{
        document.title ="REST API Test";

    })
    useEffect (() =>{
        // fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        
        fetch("http://127.0.0.1:5000")
           .then(res=> res.json())
           .then((result)=> {
            setIsLoaded(true)
            setItems(result)

        },

        (error)=> {
            setIsLoaded(true)
            setError(error)

        })
        

    }, [])
        
    if(error){
        return(<div>Error:{error.message}</div>)
    }
    else if(! isLoaded){
        return <div>Loading ...</div>
    }
    else{
   
    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
              </tr>
            </thead>
          
              {items.map(item => (
                <tr key={item.id}>
                <td>{item.name}</td>
                  <td>{item.city}</td>
                </tr>
              ))}
           
          </table>
        </div>
      )
              }
    

console.log(items)

    return(
<p> hello</p>

    )

}
export default AjaxApi;
 //     return(
    //         <div>
    //            <ul>
    //                 {items.map(item=>(
    //                     <li key= {item.id}>
    //                       <tr>Name:</tr> {item.name}&nbsp;  
    //                         City: {item.city}

    //                     </li>
    //                 ))}
    //             </ul></tr>
    //         </div>
    //     )
    // }
      {/* <tbody> */}
       {/* </tbody> */}