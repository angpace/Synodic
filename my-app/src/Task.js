import { useState } from "react"
import styled from "styled-components"

const DeleteButton = styled.button`
border-radius:20px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
font-size: 12px;
font-weight: 700;
padding: 7px 10px;
color: white;
background-color: white;`


function Task({ task, handleEditSubmit, handleDeleteClick }) {
    const { description, id } = task
    const [editClick, setEditClick] = useState(false)
    const [desEdit, setDesEdit] = useState(description)



    function onEditClick() {
        setEditClick(!editClick)
    }

    function onEditChange(e) {
        setDesEdit(e.target.value)
    }

    function onEditSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: desEdit
            })
        })
            .then(res => res.json())
            .then(data => handleEditSubmit(data))
        setEditClick(!editClick)
    }

    function onDeleteClick() {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => handleDeleteClick(task))
    }
    
    return (
        <li>
            
            {editClick ?
                <>
                    <form onSubmit={onEditSubmit}>
                        <input type="text" onChange={onEditChange} value={desEdit} />
                        <button className="textButton">Edit✏️</button>
                    </form>
                </>
                :
                <>
                    {description}  
                    <button className="editBtn" onClick={onEditClick}>Edit✏️</button>
                </>
            }
            <DeleteButton onClick={onDeleteClick}>🗑️</DeleteButton>
        </li>
    )
}

export default Task;