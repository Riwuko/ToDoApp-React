import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import todosData from "./todosData";

import uuid from "uuid";

export default class App extends Component{
	constructor(){
	super()
	this.state = {
		todos: JSON.parse(localStorage.getItem('myTodosInStorage'))||'',
		todoItem:"",
	};
	console.log(this.state.todos);
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
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
		this.state.todos.push(newTodo);
		this.setState({
			todoItem: "",
		});
		console.log(this.state.todos);
		localStorage.setItem('myTodosInStorage',JSON.stringify(this.state.todos));
	};

	

   render(){
      return(
      	<div className='container'>
      	
      	<ToDoList items={this.state.todos} handleChange={this.handleChange}/>
      	<ToDoInput 
      		todoItem={this.state.todoItem} 
      		handleInputChange={this.handleInputChange} 
      		handleSubmit={this.handleSubmit}  />

      	</div>
      	)
   };



}


