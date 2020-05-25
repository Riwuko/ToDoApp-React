import React, {Component} from "react";

export default class ToDoInput extends Component {
	render(){

		const {todoItem, handleSubmit} = this.props;

		return( 
		<div className="todo-input">
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder="add a todo item!"
					id = 'input-item'
					value={todoItem}
				/>
				<button type="submit">Add item</button>
			</form>
		</div>
		)

	}
}