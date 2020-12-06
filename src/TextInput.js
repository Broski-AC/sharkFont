import React from 'react';
import './textInput.css';

class TextInput extends React.Component {

    constructor(props){
        super();
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        this.props.handleTranslate(this.state.value);
        this.setState({value: ''})
        event.preventDefault();
    }

    render(){
        return (
            <div className='formInput'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label className='sharkLabel'> Enter text below </label>
                    <textarea className='textArea' value={this.state.value} onChange={this.handleChange}/>
                    <input className="submit" type="submit" value="Summon the Shiver!" />
                </form>
            </div>
        )
    }
}

export default TextInput;