import React, { Component } from 'react';

const validationComponent = (props) => {
    const outtext = '';
    (props.textlen > 5 ? this.outtext = 'Text long enough': (props.textlen > 1 ? 
        this.outtext = 'Text too short' : this.outtext=''))

    return (
        <div>
        { this.outtext }
    </div>
    )
    
}

export default validationComponent;