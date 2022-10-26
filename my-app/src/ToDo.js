import React, { useEffect, useState } from "react";
import Task from "./Task";
import styled from "styled-components";

const Button = styled.button `
border-radius:20px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
font-size: 12px;
font-weight: 700;
padding: 7px 10px;
color: white;
background-color: cornflowerblue
`


function ToDo() {
    const [toDo, setToDo] = useState([])
    const [form, setForm] = useState({
        description: ""
    })
    const todoURL = "http://localhost:3000/tasks"
    
    useEffect(() => {
        fetch(todoURL)
            .then(res => res.json())
            .then(data => setToDo(data))
    }, [])

    const handleChange = (e) => {
        let description = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [description]: value,
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(todoURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
        })
            .then(res => res.json())
            .then(data => setToDo([...toDo, data]))
        setForm({
            description: ""
        })
    }

    function handleEditSubmit(editedTask) {
        const updatedList = toDo.map((task) => {
            if (editedTask.id === task.id) {
                return editedTask
            }
            else {
                return task
            }
        })
        setToDo(updatedList)
    }

    function handleDeleteClick(deletedTask) {
        const updatedList = toDo.filter((task) => {
            return task.id !== deletedTask.id
        })
        setToDo(updatedList)
    }

    const toDoList = toDo.map(task => {
        return <Task key={task.id} task={task} handleEditSubmit={handleEditSubmit} handleDeleteClick={handleDeleteClick} />
    })

    return (
        <div style={{color: "white"}}>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="description" 
                placeholder="Add New To Do!" 
                onChange={handleChange} 
                value={form.description}
                />
                <Button type="submit">Add Task</Button>
            </form>
            
            <ul className="list">To-do List
                {toDoList}
            </ul>
        </div>
    )
}

export default ToDo;