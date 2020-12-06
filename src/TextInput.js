import React from 'react';
import './textInput.css';

class TextInput extends React.Component {

    render(){
        return (
            <div className='formInput'>
                <form className='form'>
                    <label className='sharkLabel'> Enter text below </label>
                    <textarea className='textArea' />
                </form>
            </div>
        )
    }
}

export default TextInput;