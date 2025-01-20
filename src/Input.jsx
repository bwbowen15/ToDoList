import react, {useState} from 'react';
import data from './data.json';

function Input({setTask}){
    //the following code adds to the list but when reloading it will go away.. I will add a backend soon so this is no longer the case
    const [inputVal, setInputVal] = useState('');

    const inputChange = (e) => {
        setInputVal(e.target.value)
    };

    //add item to the json... will add to database eventually
    const addItem = (e) =>{
        e.preventDefault();
        const newTask = {
            id: data.length + 1,
            task: inputVal,
            complete: false,
        };
        const updatedData = [...data, newTask];
        setTask(updatedData)
        setInputVal('');
    };

    
    

    
    return(
        <form onSubmit={addItem}>
            <input 
            placeholder="Enter Task"
            type='text'
            value={inputVal}
            onChange={inputChange}
            ></input>
            <button
            type='submit'>Add</button>
        </form>
        )

}

export default Input;