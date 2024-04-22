import React, { FC, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

const [questionForm, setQuestionForm] = useState({
  name: "",
  email: "",
  type: "",
  questions:[{
    "question":"",
    "optionA": "",
    "optionB": "",
    "optionC": "",
    "optionD": "",
    "selectedOtion": ""
  }]
});

let navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(questionForm);
  navigate("/result", { state: { form: questionForm } });
};
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
       <form onSubmit={handleSubmit}>
       <table>
        
          {QuestionData}
       </table>

       <div className="form-control">
          <label></label>
          <button type="submit">Finish Exam</button>
        </div>
       </form>
     </div>
   );
 }
 


export default Question;
