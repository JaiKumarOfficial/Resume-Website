import React from "react"

function MainContent(props) {
    const spanStyle = {
        color: 'green', 
        textDecoration: props.item.isChecked ? 'line-through' : '',
        textDecorationColor: props.item.isChecked ? 'red' : '',
    }
    return (
        <div>
            <input type='checkbox' checked={props.item.isChecked} onChange={() => props.handleCheckbox(props.item.id)}/>
            <span style={spanStyle}>{props.item.label}</span>
            <hr style={{marginRight: '70%'}}/>
        </div>
    )
}

export default MainContent