import React, {useState} from 'react';
import './App.css';
import { TaskType, Todolist} from './Todolist';

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

   let [tasks, setTasks] = useState<Array<TaskType>>([
      { id: 1, title: "HTML&CSS", isDone: true },
      { id: 2, title: "JS", isDone: true },
      { id: 3, title: "ReactJS", isDone: false },
      { id: 4, title: "ReduxToolkit", isDone: true }
   ])

   const filterTask = (value: FilterValueType) => {
      setFilter(value)
   }

   let [filter, setFilter] = useState<FilterValueType>('all')

   let taskForTodolist = tasks
   if (filter === 'active') {
      taskForTodolist = tasks.filter(el => el.isDone)
   }
   if (filter === 'completed') {
      taskForTodolist = tasks.filter(el => !el.isDone)
   }

  let removeTask = (taskID: number) => {
     let filteredTask = tasks.filter( el => el.id !== taskID )
     setTasks(filteredTask)
  }


   return (
      <div className="App">
         <Todolist
            title="What to learn"
            tasks={taskForTodolist}
            removeTask={removeTask}
            filterTask={filterTask}
         />
      </div>
   );
}

export default App;
