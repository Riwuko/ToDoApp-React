import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import todosData from "./todosData";

import uuid from "uuid";

export default class App extends Component{
	constructor(){
	super()
	this.state = {
		todos: JSON.parse(localStorage.getItem('myTodosInStorage'))||[],
		todoItem:"",
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
	};

	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id){
					todo.completed = !todo.completed
				}
				return todo
			})
			localStorage.setItem('myTodosInStorage',JSON.stringify(this.state.todos));
			return {
				todos: updatedTodos
			}
		});
	};

	handleInputChange(e) {
		this.setState({
			todoItem: e.target.value
		})
	};

	handleSubmit (e) {
		e.preventDefault(); //prevent refreshing page after submit
		
		const newTodo = {
			id:uuid(),
			text: this.state.todoItem,
			completed: false,
		}
		const updatedTodos = [...this.state.todos,newTodo];
		this.setState({
			todoItem: "",
			todos: updatedTodos
		});
		console.log(this.state.todos);
		localStorage.setItem('myTodosInStorage',JSON.stringify(updatedTodos));
	};

	handleDelete (id) {
		const withoutDeleted = this.state.todos.filter(todo => todo.id !== id)
		this.setState({
			todos: withoutDeleted
		});
		localStorage.setItem('myTodosInStorage',JSON.stringify(withoutDeleted));

	};

	handleClearList(){
		const updatedTodos = []
		this.setState({
			todos: updatedTodos
		})
		localStorage.setItem('myTodosInStorage',JSON.stringify(withoutDeleted));
	}

   render(){
      return(
      	<div className='container'>
      	
      	<ToDoList 
      		items={this.state.todos} 
      		handleChange={this.handleChange}
      		handleDelete={this.handleDelete}
      		/>
      	<ToDoInput 
      		todoItem={this.state.todoItem} 
      		handleInputChange={this.handleInputChange} 
      		handleSubmit={this.handleSubmit}  
      		/>
      	<button className="clear-list" onClick={this.handleClearList}>Clear list!</button>
      	</div>
      	)
   };



}


