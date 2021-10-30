import React, { useState } from 'react';
import Button from '../Button';
import TimerForm from '../TimerForm';
import './ToogleableTimerForm.css';
const ToggableTimerForm = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleCreateTimer = (data) => {
    onCreate(data);

    handleCloseForm();
  };

  if (!isOpen) return <Button className="btn--create" onClick={handleOpenForm}>+</Button>;

  return <TimerForm onCancel={handleCloseForm} onUpdate={handleCreateTimer} />;
};

export default ToggableTimerForm;
