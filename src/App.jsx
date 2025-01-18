import react, {useState} from 'react';
import data from "./data.json";


//componenets:
import Header from "./Header";
import TaskList from "./TaskList";



function App() {
  const [task, setTask] = useState(data);
  return (
    <>
    
    <Header></Header>
    <TaskList taskList={task}></TaskList>
    
    
    
    </>
  )
}

export default App
