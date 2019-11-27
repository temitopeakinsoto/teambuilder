import React, { useState } from 'react';
import uuid from 'uuid';
import Form from './components/Form';
import Member from './components/Member';

import './App.css';

const initialMembersList = [
  {
   id: uuid(),
   fullname: "Temitope Akinsoto",
   email: "temitopeakinsoto@lambdaschool.com",
   role: "Full Stack Developer" 
  },
  {
    id: uuid(),
    fullname: "Justin Irabor",
    email: "justinirabor@lambdaschool.com",
    role: "Front End Developer" 
   },
   {
    id: uuid(),
    fullname: "Oluwafemi Anjorin",
    email: "oluwafemianjorin@lambdaschool.com",
    role: "Full Stack Developer" 
   },
   {
    id: uuid(),
    fullname: "David Kuseh",
    email: "davidkuseh@lambdaschool.com",
    role: "Full Stack Developer" 
   },
   {
    id: uuid(),
    fullname: "Victor Arowo",
    email: "victorarowo@lambdaschool.com",
    role: "Full Stack Developer" 
   },
]

const memberFormInput = {
  fullname: "",
  email: "",
  role: ""
}

function App() {
  const [membersList, setMembersList] = useState(initialMembersList);
  const [newMember, setNewMember] = useState(memberFormInput)
  return (
    <div className="App">
      <h1>Welcome, REACT</h1>
      <Form />
      {
        membersList.map(member => (
          <Member  
          id={member.id} 
          fullname={member.fullname}
          email={member.email}
          role={member.role}
          />
        ))
      }

      
      
    </div>
  );
}

export default App;
