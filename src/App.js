import { useEffect,useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';



function App() {
  
  const [data ,setData] =useState('')
  
const getAllData = () => {
  
        axios
          .get("https://www.breakingbadapi.com/api/characters/")
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
}
useEffect(() => {
      getAllData();
},[]);

return (
        <>
            {data ? 
                data.map(data => {
                    return(
                      
                      

                    <div className="mar" style={{display:"inline-block"}}>
                      
                       <div className="data App " key={data.id} >
                         
                         <h3 style={{color:"white"}}>{data.name}</h3>
                         <span><img src={data.img} alt="none" style={{height:"200px", width:"200px"}} /></span>
                         <h4 style={{color:"white"}}>{data.birthday}</h4>
                         
                       </div>
                       </div>
                       


                       
                    )
                     }) : <h3>No data yet</h3> }
        </>
    )
}





 
  

export default App;
