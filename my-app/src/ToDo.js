import React, { useEffect, useState} from "react";

function ToDo() {
const [toDo, setToDo] = useState([])
const [form, setForm] = useState({})
 const todoURL = "http://localhost:3000/tasks"
useEffect(() => {
fetch(todoURL)
.then(res => res.json())
.then(data => setToDo(data))
}, [])

const handleChange = (e) => {
    let description = e.target.name
    let value = e.target.value
    setForm({...form, 
        [description]: value,})
    
}

function handleSubmit(e){
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
}

const toDoList = toDo.map(task => {
    return <li key={task.id}>{task.description}</li>
})

    return (
        <div>
        <ul>To Do: 
            {toDoList}
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Add New To Do!" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ToDo;