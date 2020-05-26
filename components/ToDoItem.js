import React from 'react';

export default function ToDoItem(props) {
const completedStyle = {
	fontStyle:"italic",
	color:"#fff",
	textDecoration: "line-through"
}
return(
<div className="todo-item">
	<div>
	<input
		type="checkbox"
		checked={props.item.completed}
		className="checkmark"
		onChange={()=> props.handleChange(props.item.id)}
	/>
	<div style={props.item.completed ? completedStyle : null}>{props.item.text}</div>
	</div>
	<div>
	<button onClick={()=>props.handleDelete(props.item.id)} className="btn"><i className="fa fa-close"></i></button>
	</div>
	
</div>
)

}
