import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import CompletedFilter from "./CompletedFilter";

export default class ToDoList extends Component{
	

	render() {
		const {items, handleChange, handleDelete, handleFilterChange} = this.props

		if (items.length === 0){
	   		var todoItems = []
	   		var emptyMessage = "No tasks to do!"
	   	}else{
	   		var todoItems = items.map(item=> 
	   			<ToDoItem key={item.id} 
	   			item={item} 
	   			handleChange={handleChange}
	   			handleDelete={handleDelete}
	   			/>)

	   		var emptyMessage=''
	   	}
		return(
			<div className="todo-list">
			<div className="logo"></div>
			<CompletedFilter 
      		handleFilterChange={handleFilterChange}
      		/>
			{todoItems}
			{emptyMessage}
			</div>
		)
	}
}