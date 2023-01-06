import React, {useState} from 'react'
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import Todo from './components/toDo/ToDo'
import UpdateForm from './components/UpdateForm/UpdateForm'
import './App.css';

function App(){
    // Task State
    const [toDo, setToDo] = useState([
        {'id': 1, 'name': 'Dastan', email: 'njcd@gmail.com', phone:'23456345', enrollNumber: '2348354t532', dataOfAdmission:'08/67/5532',  'status': false},
        {'id': 2, 'name': 'Bekbol', email: 'njcd@gmail.com', phone:'23456345', enrollNumber: '2348354t532', dataOfAdmission:'08/67/5532',  'status': false}
    ])
    // Temp State
    const [newTask, setNewTask] = useState('')
    const [updateData, setUpdateData] = useState('')
    // Add task
    const addTask = () => {
        if(newTask){
            let num = toDo.length + 1
            let newEntry = { id: num, name: newTask, status: false }
            setToDo([...toDo, newEntry])
            setNewTask('')
        }
    }
    // delete Task
    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !==id)
        setToDo(newTasks)
    }
    // mark task as done or completed
    const markDone = (id) => {
        let newTask = toDo.map(task => {
            if (task.id === id){
                return({...task, status: !task.status})
            }
            return task
        })
        setToDo(newTask)
    }
    // cancel update
    const cancelUpdate = () => {
        setUpdateData('')
    }
    // change task for update
    const changeTask = (e) => {
       let newEntry = {
           id: updateData.id,
           name: e.target.value,
           email: e.target.value,
           phone: e.target.value,
           enrollNumber: e.target.value,
           dateOfAdmission: e.target.value,
           status: updateData.status ? true : false
       }
       setUpdateData(newEntry)
    }
    // update task
    const updateTask = () => {
        let filterRecords = [...toDo].filter( task => task.id !== updateData.id )
        let updatedObject = [...filterRecords, updateData]
        setToDo(updatedObject)
        setUpdateData('')
    }
  return (

    <div className="container App">
        {/*update task*/}
        { updateData && updateData ? (
          <UpdateForm
              updateData={updateData}
              changeTask={changeTask}
              updateTask={updateTask}
              cancelUpdate={cancelUpdate}
          />
        ) : (
           <AddTaskForm
               newTask={newTask}
               setNewTask={setNewTask}
               addTask={addTask}
           />
        ) }
        {/* Display ToDos*/}
        {toDo && toDo.length ? '' : 'No Tasks...'}
        <Todo
            toDo={toDo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
        />
    </div>
  );
}

export default App;
