import React from "react";

export default function Form(props) {
  const { onSubmit, onChange, newMember } = props;
  const { fullname, email } = newMember;
  return (
    <form>
      <label htmlFor="fullnameInput">Name</label>
      <input
        id="fullnameInput"
        name="fullname"
        value={fullname}
        onChange={onChange}
      />
      <br />

      <label htmlFor="emailInput">Email</label>
      <input id="emailInput" name="email" onChange={onChange} value={email} />
      <br />

      <select>
        <option></option>
        <option>FRONT END</option>
        <option>BACK END</option>
        <option>FULL STACK</option>
      </select>

        <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
