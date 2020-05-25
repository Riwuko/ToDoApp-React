import React, {Component} from "react";
import ToDoItem from "./ToDoItem";


export default class ToDoList extends Component{
	

	render() {
		const {items, handleChange} = this.props

		if (items.length === 0){
	   		var todoItems = []
	   		var emptyMessage = "No tasks to do!"
	   	}else{
	   		var todoItems = items.map(item=> <ToDoItem key={item.id} item={item} 
	   		handleChange={handleChange}/>)
	   		var emptyMessage=''
	   	}
		return(
			<div className="todo-list">
			<ul>
			<h3>Todo list</h3>
			{todoItems}
			{emptyMessage}
			</ul>
			</div>
		)
	}
}