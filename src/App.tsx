import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

   let [tasks, setTasks] = useState([
      {id: 1, title: "HTML&CSS", isDone: true},
      {id: 2, title: "JS", isDone: true},
      {id: 3, title: "ReactJS", isDone: false},
      {id: 4, title: "GraphQL", isDone: true},
      {id: 5, title: "Redux", isDone: false},
   ])

   const removeTask = (taskID: number) => {
      setTasks(tasks.filter((el) => el.id !== taskID))
   }

   const [filter, setFilter] = useState('all')

   let colander = tasks
   if (filter === 'active') {
      colander=tasks.filter(el=>!el.isDone)
   }
   if (filter === 'active') {
      colander=tasks.filter(el=>el.isDone)
   }

   const filterTask = (filteredValue: string) => {
      setFilter(filteredValue)
   }

   return (
      <div className="App">
         <Todolist
            title="What to learn"
            tasks={colander}
            removeTask={removeTask}
            filterTask={filterTask}
         />
      </div>
   );
}

export default App;
