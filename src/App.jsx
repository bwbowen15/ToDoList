import react, {useState} from 'react';
import data from "./data.json";
import "./index.css";


//componenets:
import Header from "./Header";
import TaskList from "./TaskList";
import Input from './Input';



function App() {
  const [task, setTask] = useState(data);
  return (
    <>
    
    <Header></Header>
    <Input></Input>
    <TaskList taskList={task}></TaskList>
    
    
    
    </>
  )
}

export default App
