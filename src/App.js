import Header from './component/Header'
import Tasks from './component/Tasks'
import { useState } from 'react'

const App =()=> {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'aaa',
      day: '123',
      reminder: true,
    },
    {
      id: 2,
      text: 'bbb',
      day: '234',
      reminder: true,
    },
    {
      id: 3,
      text: 'ccc',
      day: '1567',
      reminder: false,
    },
  ])
 
  const deleteTask =(id)=> {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App
