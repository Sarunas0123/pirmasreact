import React from 'react';

const Contacts = (props) => {
    return (
        <div className="contact-card">
            <h3> Name: {props.name}</h3>
            <p> Email: {props.email}</p>
        </div>
    )
}

export default Contacts
