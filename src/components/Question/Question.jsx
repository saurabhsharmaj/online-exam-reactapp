import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderBar from '../Nav/Nav';

function Question(props) {

  const  userExamDetail  = useLocation();
  console.log(userExamDetail);
   return (
     <div >       
       <HeaderBar/>
       <center><h4> Question List </h4></center>
       <p>Name: {userExamDetail.state==null?'-':userExamDetail.state.form.name}</p>
       <p>Email: {userExamDetail.state==null?'-':userExamDetail.state.form.email}</p>
       <p>Type: {userExamDetail.state==null?'-':userExamDetail.state.form.type}</p>
     </div>
   );
 }
 


export default Question;
