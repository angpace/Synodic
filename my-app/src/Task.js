import { useState } from "react"
import styled from "styled-components"

const DeleteButton = styled.button`
border-radius:20px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
font-size: 11px;
font-weight: 500;
padding: 3px 6px;
color: white;
background-color: white;
:hover {
    background-color: lightgreen
}`

const EditButton = styled.button`
border-radius:20px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
font-size: 11px;
font-weight: 500;
padding: 3px 6px;
color: cornflowerblue;
background-color: white;
:hover {
    background-color: lightgreen
}
`


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
        <tr>
            <td>{description}</td>
            <td>
            {editClick ?
                
                    <form onSubmit={onEditSubmit}>
                        <input type="text" onChange={onEditChange} value={desEdit} />
                        <EditButton className="textButton">✏️</EditButton>
                    </form>
                :
                  
                    <EditButton className="editBtn" onClick={onEditClick}>Edit</EditButton>
                
            }
            </td>
            <td>
            <DeleteButton onClick={onDeleteClick}>✔️</DeleteButton>
            </td>
            </tr>
    )
}

export default Task;