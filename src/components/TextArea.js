import React from 'react';

const TextArea = ({ text }) => {

    const handleChange = () => {
    
    }
    
    return (        
        <textarea id="textarea" name="textarea" value={ text } onChange={ handleChange } />
    );    
}

export default TextArea;