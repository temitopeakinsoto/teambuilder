import React from 'react'

export default function Form(props) {
    return (
        <form>
            <label htmlFor="fullnameInput">Name</label>
            <input
            id="fullnameInput"
            name="fullname"
            value={""}
            /><br/>
            <label htmlFor="emailInput">Email</label>
            <input
            id="emailInput"
            name="email"
            value={""}
            /><br/>
            <select> 
                <option></option>
                <option>FRONT END</option>
                <option>BACK END</option>
                <option>FULL STACK</option>
            </select>
        </form>
    )
}

