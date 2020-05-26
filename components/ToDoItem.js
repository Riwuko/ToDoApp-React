import React from 'react';

export default function ToDoItem(props) {
const completedStyle = {
	fontStyle:"italic",
	color:"#cdcdcd",
	textDecoration: "line-through"
}
return(
<div className="todo-item">
	<input
		type="checkbox"
		checked={props.item.completed}
		onChange={()=> props.handleChange(props.item.id)}
	/>
	<span className="delete-icon" onClick={()=>props.handleDelete(props.item.id)}> DEL </span>
	<p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
	
</div>
)

}
