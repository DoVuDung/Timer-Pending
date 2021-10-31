import { useEffect, useRef, useState } from 'react';
import './App.css';
import EditableTimerForm from './components/EditableTimerForm';
import ToggableTimerForm from './components/ToggleableTimerForm';
import { getNewTimer } from './utils/TimerUtils';

function App() {
  const timerRef = useRef(null);

  //timer = {}
  const [timers, setTimers] = useState([{
    id: '1',
    title: 'Learn React',
    project: 'Internship',
    time: 123412,
    isRunning: false,
  },
  {
    id: '2',
    title: 'Learn React P2',
    project: 'Internship',
    time: 1234122,
    isRunning: false,
  },
  ]);
  const changeIsRunning = (id) => {
    const newTimers = timers.map((timer, idx) => {
      if (timer.id === id)
        return {
          ...timer,
          isRunning: !timer.isRunning
        };
      return timer;
    });

    setTimers(newTimers);
  }

  const handleUpdateTimer = (data) => {
    const newTimers = timers.map((timer, idx) => {
      if (timer.id === data.id)
        return {
          ...timer,
          title: data.title,
          project: data.project,
        };

      return timer;
    });

    setTimers(newTimers);
  };

  const handleCreateTimer = (data) => {
    const newTimer = getNewTimer(data);
    setTimers([newTimer, ...timers]);
  };

  const handleRemoveTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));

  };
  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const newTimers = timers.map((timer, idx) => {
        if (timer.isRunning)
          return {
            ...timer,
            time: timer.time + 1000,
          };

        return timer;
      });

      setTimers(newTimers);
    }, 1000);
  }, [timers]);

  return (
    <div className='App' >
      <h1> Timers </h1>
      <ToggableTimerForm onCreate={handleCreateTimer} />
      {
        timers.map((timer, idx) => {
          return (<
            EditableTimerForm key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            time={timer.time}
            onRemove={handleRemoveTimer}
            isRunning={timer.isRunning}
            onUpdate={handleUpdateTimer}
            onPlayChange={changeIsRunning}
          />
          );
        })
      } </div>
  );
}

export default App;