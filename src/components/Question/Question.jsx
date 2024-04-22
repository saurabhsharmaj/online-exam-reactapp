import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderBar from '../Nav/Nav';
import JsonData from './questions.json'

function Question(props) {

  const QuestionData=JsonData.map(
    (q)=>{
        return(
          <tbody>
            <tr>
                <td colspan="4">Q. {q.question}</td>
            </tr><tr>
            <td colspan="4"/>
            </tr><tr>
                <td> 
                  <input
                      type="radio"
                      name={q.question}
                      value={q.option.a}                
                    />
                  {q.option.a}
                </td>
                
                <td> 
                  <input
                      type="radio"
                      name={q.question}
                      value={q.option.b}                
                    />
                  {q.option.b}
                </td>
                <td> 
                  <input
                      type="radio"
                      name={q.question}
                      value={q.option.c}                
                    />
                  {q.option.c}
                </td>
                <td> 
                  <input
                      type="radio"
                      name={q.question}
                      value={q.option.d}                
                    />
                  {q.option.d}
                </td>
               
            </tr>
            <tr>
            <td colspan="4"/>
            </tr>
            </tbody>
        )
    }
)
  const  userExamDetail  = useLocation();
  console.log(userExamDetail);
   return (
     <div >       
       <HeaderBar/>
       <center><h4> Question List </h4></center>
       <p>Name: {userExamDetail.state==null?'-':userExamDetail.state.form.name}</p>
       <p>Email: {userExamDetail.state==null?'-':userExamDetail.state.form.email}</p>
       <p>Type: {userExamDetail.state==null?'-':userExamDetail.state.form.type}</p>
       <hr></hr>
       <table>
        
          {QuestionData}
       </table>
     </div>
   );
 }
 


export default Question;
