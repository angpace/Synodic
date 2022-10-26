import { useState } from "react"

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
                        <button>Submit</button>
                    </form>
                </>
                :
                <>
                    {description}
                    <button className="editBtn" onClick={onEditClick}>✏️</button>
                </>
            }
            <button onClick={onDeleteClick}>🗑️</button>
        </li>
    )
}

export default Task