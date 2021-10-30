import React, { useState } from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

const EditableTimerForm = ({
  id,
  title,
  project,
  time,
  isRunning,
  onUpdate,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOpenForm = () => {
    setIsEdit(true);
  };

  const handleCloseForm = () => {
    setIsEdit(false);
  };

  const handleUpdate = (data) => {
    onUpdate(data);
    handleCloseForm();
  };

  if (isEdit)
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onCancel={handleCloseForm}
        onUpdate={handleUpdate}
      />
    );

  return (
    <Timer
      title={title}
      project={project}
      time={time}
      isRunning={isRunning}
      onEdit={handleOpenForm}
    />
  );
};

export default EditableTimerForm;
