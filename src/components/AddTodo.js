import React from 'react'

function AddTodo(props) {
    return (
        <form onSubmit={props.handleAddBtn}>
            <label>To Do:  </label>
            <input type='text' name='todo' placeholder='Run errands' ></input>
            <button type='submit' >Add</button>
        </form>
    )
}

export default AddTodo