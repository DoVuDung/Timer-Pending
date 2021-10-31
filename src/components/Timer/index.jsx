import React from 'react';
import { millisecondsToHuman } from '../../utils/TimerUtils';
import Button from '../Button';
import './Timer.css';
const Timer = ({ id,title, project, time, isRunning, onEdit, onRemove, onPlayChange }) => {
  //static page
  const buttonLabel = isRunning ? 'STOP' : 'START';
 
  const handleEdit = () => {
    onEdit();
  };
   
  return (
    <div className='App-component'>
      <p>{title}</p>
      <p>{project}</p>
      <p>{millisecondsToHuman(time)}</p>

      <div>
        <Button className="edit" onClick={handleEdit}>EDIT</Button>
        <Button className="remove" onClick={()=>onRemove(id)}>REMOVE</Button>
      </div>
    
      <Button className={`btn--${buttonLabel}`} onClick={()=>onPlayChange(id)}>{buttonLabel}</Button>
    </div>
  );
};

export default Timer;
