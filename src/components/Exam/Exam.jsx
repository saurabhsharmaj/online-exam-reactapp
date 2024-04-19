import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderBar from '../Nav/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Exam(props) {

  let navigate = useNavigate();

  const [examFormDetail, setExamformDetail] = useState({
    name: "",
    email: "",
    type: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExamformDetail((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(examFormDetail);
    navigate("/question", { state: { form: examFormDetail } });
  };


  return (
    <div >
      <HeaderBar />
      <center><h4> Exam Form </h4></center>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={examFormDetail.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={examFormDetail.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Select Type</label>
          <select name="type" value={examFormDetail.type}   onChange={handleInputChange}>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="maths">Maths</option>
          </select>
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Start Exam</button>
        </div>
      </form>
    </div>
  );
}



export default Exam;
