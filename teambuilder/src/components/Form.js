import React from "react";

export default function Form(props) {
  const { onSubmit, onChange, newMember, isEnabled } = props;
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

      <select id="roleInput" name="role" onChange={onChange}>
        <option></option>
        <option value="Front End">FRONT END</option>
        <option value="Back End">BACK END</option>
        <option value="Full Stack">FULL STACK</option>
      </select>

        <button disabled={isEnabled()} onClick={onSubmit}>Submit</button>
    </form>
  );
}
