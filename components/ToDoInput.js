import React, {Component} from "react";

export default class ToDoInput extends Component {
	render(){

		const {todoItem,handleInputChange, handleSubmit} = this.props;

		return( 
		<div className="todo-input">
			<form onSubmit={handleSubmit}>
			<div>
				<input 
					type="text" 
					placeholder="add a todo item!"
					id = 'input-item'
					value={todoItem}
					onChange={handleInputChange}
				/>
				</div>
				<div>
				<button className="item-submit" type="submit">Add item</button>
			</div>
			</form>
		</div>
		)

	}
}