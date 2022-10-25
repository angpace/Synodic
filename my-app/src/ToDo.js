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
    return <li key={task.id}>{task.description}</li>
})

    return (
        <div>
        <ul>To Do: 
            {toDoList}
        </ul>
        <form>
            <input type="text" name="description" placeholder="Add New To Do!"></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ToDo;