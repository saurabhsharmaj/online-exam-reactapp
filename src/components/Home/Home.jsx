import React, { FC, createContext, memo, useState } from 'react';
import HeaderBar from '../Nav/Nav';



function Home(props) {
    
  const [data, setData] = useState([]); 
  const dataValue = (e) =>{
    console.log(e.target.name+' - '+e.target.value);
    setData({...data,[e.target.name]:e.target.value});
  }


   return (
     <div >
       
       <HeaderBar/>
       <>
      </>
      <center><h4>Add Details about Our Online Test</h4></center>     
     </div>
   );
 }
 


export default Home;
