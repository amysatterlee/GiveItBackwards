import React, { useState } from 'react';
import Title from './Title';
import Input from './Input';
import DisplayText from './DisplayText';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [backwards, setBackwards] = useState('');

  const changeTextValue = (val) => {
    setTextValue(val);
    let backVal = val.split('').reverse().join('');
    setBackwards(backVal);
  };

  return (
    <>
      <Title/>
      <Input textValue={textValue} handleChangeText={changeTextValue}/>
      <DisplayText textValue={backwards}/>
    </>
  );
}

export default App;
