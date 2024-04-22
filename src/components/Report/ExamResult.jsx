import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderBar from '../Nav/Nav';

function ExamResult(props) {
  
  const  userExamDetail  = useLocation();
  console.log(userExamDetail);

   return (
     <div >       
       <HeaderBar/>
       <center><h4> Report </h4></center>
       <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <tr><td>Sr.NO</td><td></td></tr>
                    <tr><td>Time</td><td></td></tr>
                    <tr><td>Name</td><td></td></tr>
                    <tr><td>Email Id</td><td></td></tr>
                    <tr><td>Score</td><td></td></tr>
                    </tr>
                </thead>
            </table>
        </div>
     </div>
   );
 }
 


export default ExamResult;
