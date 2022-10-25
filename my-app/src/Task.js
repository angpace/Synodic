import { useState } from "react"

function Task({task}){
    const {description, id} = task
    const [editClick, setEditClick] = useState(false)

    function onEditClick(){
        setEditClick(!editClick)
        console.log(id)
    }
    
    return(
        <li>
            {description}
            <button className="editBtn" onClick={onEditClick}>✏️</button>
        </li>
    )
}

export default Task