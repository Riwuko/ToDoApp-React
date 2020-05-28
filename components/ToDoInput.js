import React, {Component} from "react";

export default class ToDoInput extends Component {
	render(){

		const {todoItem,handleInputChange, handleSubmit} = this.props;

		return( 
		<div className="todo-input">
			<form onSubmit={handleSubmit}>

				<input 
					type="text" 
					placeholder="add a todo item!"
					id = 'input-item'
					value={todoItem}
					onChange={handleInputChange}
				/>
				<button className="item-submit" type="submit">Add item</button>
			
			</form>
		</div>
		)

	}
}