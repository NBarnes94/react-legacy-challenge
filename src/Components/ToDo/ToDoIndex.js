import React, { Component } from 'react'
import Task from './Task';


export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: "",
            toDoList: []
        };
        this.submitHandle = this.submitHandle.bind(this);
        this.completeTask = this.completeTask.bind(this)
    }

    changeHandler(event){
        this.setState({
            newTask: event.target.value
        })
    }

    submitHandle(e){
        e.preventDefault();
        this.setState((prevState) =>({
            toDoList:[...prevState.toDoList, this.state.newTask],
            newTask: "",
        }))
    }   

    completeTask(taskIndex){
        console.log(taskIndex);
        this.setState(prevState =>({
            toDoList: prevState.toDoList.filter((_,index)=>
                index!== taskIndex
            )
        }))
    }

    render() {
        console.log(this.state.newTask);
        return (
            <div>
                <form onSubmit={this.submitHandle}> 
                    <input value={this.state.newTask} onChange={(e) => this.changeHandler(e)}/>
                    <button type="submit">
                        Add task
                    </button>
                </form>
                <br />
                {
                    this.state.toDoList.length >0 ? ( this.state.toDoList.map((tasks, index)=>{
                    return(
                        <Task key={index} index={index} task={tasks} completeTask={this.completeTask}/>
                    )
                })) : <h2>No Tasks Currently</h2>
                }                
            </div>
        )
    }
}