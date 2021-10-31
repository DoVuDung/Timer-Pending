import React, { useState } from 'react';
import Button from '../Button';
import './TimerForm.css';
const TimerForm = ({ id, title, project, onCancel, onUpdate }) => {
  const [inputTitle, setInputTitle] = useState(title || '');
  const [inputProject, setInputProject] = useState(project || '');

  const updateLabel = id ? 'Update' : 'Create';

  const handleUpdate = () => {
    onUpdate({
      id: id,
      title: inputTitle,
      project: inputProject,
    });
  };

  return (
    <div className='App-component'>
      <div className="form__edit">
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        ></input>
      </div>

      <div className="form__edit">
        <label htmlFor='project'>Project</label>
        <input
          id='project'
          value={inputProject}
          onChange={(e) => setInputProject(e.target.value)}
        ></input>
      </div>

      <div>
        <Button className="btn--cancel" onClick={onCancel}>Cancel</Button>
        <Button className="updateLabel" onClick={handleUpdate}>{updateLabel}</Button>
      </div>
    </div>
  );
};

export default TimerForm;
