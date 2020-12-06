import {useState} from 'react';
import './App.css';
import Title from './Title.js';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

function App() {

  const [text, setText] = useState('');

  function handleTranslate(value){
    setText(value);
  }

  return (
    <div className="App">
      <Title />
      <TextInput handleTranslate={handleTranslate}/>
      <TextOutput translationText={text}/>
    </div>
  );
}

export default App;
