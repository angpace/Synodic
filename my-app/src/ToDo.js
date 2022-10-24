import React, { useEffect, useState} from "react";

function ToDo() {
const [toDo, setToDo] = useState([])
 const todoURL = "http://localhost:3000/tasks"
useEffect(() => {
fetch(todoURL)
.then(res => res.json())
.then(data => setToDo(data))
}, [])

const toDoList = toDo.map(task => {
    return <li>{task.description} </li>
})

    return (
        <ul>To Do: 
            {toDoList}
        </ul>
    )
}

export default ToDo;