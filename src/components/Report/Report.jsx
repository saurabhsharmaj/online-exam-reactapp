import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from '../Nav/Nav';
import JsonData from './result.json'

function Report(props) {
  
    const DisplayData=JsonData.map(
        (user)=>{
            return(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.testTime}</td>
                    <td>{user.name}</td>
                    <td>{user.emailId}</td>                    
                    <td>{user.score}</td>
                </tr>
            )
        }
    )
    
   return (
     <div >       
       <HeaderBar/>
       <center><h4> Report </h4></center>
       <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Time</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
     </div>
   );
 }
 


export default Report;
