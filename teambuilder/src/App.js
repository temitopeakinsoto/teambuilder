import React, { useState } from "react";
import uuid from "uuid";
import Form from "./components/Form";
import Member from "./components/Member";

import "./App.css";

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
  }
];

const memberFormInput = {
  fullname: "",
  email: "",
  role: ""
};

function App() {
  const [membersList, setMembersList] = useState(initialMembersList);
  const [newMember, setNewMember] = useState(memberFormInput);

  const onChange = e => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, fullname, role } = newMember;
    const newMemberToBeAdded = {
      id: uuid(),
      fullname,
      email,
      role
    };
    const newMembersList = membersList.concat(newMemberToBeAdded);
    setMembersList(newMembersList);
    setNewMember(memberFormInput)
  };

  const isEnabled = () => {
    const { email, fullname, role } = newMember;
    return(!fullname || !email || !role)
  }

  return (
    <div className="App">
      <h1>Welcome, REACT</h1>
      <Form
        onChange={onChange}
        onSubmit={onSubmit}
        newMember={newMember}
        isEnabled={isEnabled}
      />
      {membersList.map(member => (
        <Member
          key={member.id}
          fullname={member.fullname}
          email={member.email}
          role={member.role}
        />
      ))}
    </div>
  );
}

export default App;
