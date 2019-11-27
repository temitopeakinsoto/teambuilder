import React from 'react'

export default function Member(props) {
    const { email, fullname, role } = props;
    return (
        <div>
            <p>NAME: {fullname}, EMAIL: {email}, ROLE: {role}</p>
        </div>
    )
}
