import React, { Component } from 'react';

const charComponent = (props) => {
    const charStyle = {
        display: 'inline-block',
        padding: '6px',
        textAlign: 'center',
        margin: '16px',
        border: '2px solid black'
    };

    return (
        <div style={charStyle} onClick = {props.clicked}>
            {props.char}
        </div>
    )
}

export default charComponent;