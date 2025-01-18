import Task from "./Task"
import React from "react"

function TaskList({taskList}){
    return(
        <div>
            {
                taskList.map(task =>
                {
                    return(
                    <Task task={task}></Task>
                )
                }
                )
            }
        </div>
    )
}
export default TaskList