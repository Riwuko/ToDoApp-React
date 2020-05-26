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
	<div className="delete-icon" onClick={()=>props.handleDelete(props.item.id)}> DEL </div>
	<p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
	
</div>
)

}
