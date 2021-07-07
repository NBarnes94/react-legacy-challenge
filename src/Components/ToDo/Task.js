import React from 'react'

const Task = props =>{
    return(
        <div>
            <span>{props.task}&emsp;</span>
            <button onClick={(e) => props.completeTask(props.index)}>Done!</button>
        </div>
    )
}
export default Task;