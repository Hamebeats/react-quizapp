import React, { useState } from 'react';
import './quiz.css'
//import styles from './my-styles.module.css'

const NameEntryPage = ({ onNameEntered }) => {
    const [userName, setUserName] = useState('');
  
    const handleNameSubmit = () => {
      if (userName.trim() !== '') {
        onNameEntered(userName);
      }
    };
    return (
      <div className='signin'>
        <div>
        <h2 className='welcome'> The Hamebeats Quiz!</h2>
        <label className='label'>
          Enter Your Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='input'
          />
        </label>
        </div>
        <div className='start'>
        <button className = 'enterButton' onClick={handleNameSubmit}>Start Quiz</button>
        </div>
      </div>
    );
  };
  export default NameEntryPage;
  