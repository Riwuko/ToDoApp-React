import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import CompletedFilter from './components/CompletedFilter';
import todosData from "./todosData";

import uuid from "uuid";

export default class App extends Component{
	constructor(){
	super()
	this.state = {
		todos: JSON.parse(localStorage.getItem('myTodosInStorage'))||[],
		todoItem:"",
		hideCompleted:false,
		unfilteredTodos:[] //to store todos state before filtering
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleDelete = this.handleDelete.bind(this);
	this.handleClearList = this.handleClearList.bind(this);
	this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	changeStateTodoItemValue(value){
		this.setState({
			todoItem: value
		})
	}

	changeStateTodosValue(value){
		this.setState({
			todos: value
		})
		localStorage.setItem('myTodosInStorage',JSON.stringify(value));
	}

	changeStateUnfilteredTodos(value){
		this.setState({
			unfilteredTodos: value
		})
	}

	changeStateHideCompleted(value){
		this.setState({
			hideCompleted: value
			})
	}

	handleChange(id) {
		this.setState(prevState =>{
         const updatedTodos = prevState.todos.map( todo=>{
            if(todo.id === id){
               todo.completed = !todo.completed;
            }
            return todo
         })
         localStorage.setItem('myTodosInStorage',JSON.stringify(updatedTodos));
         return{
            todos: updatedTodos
         }
      })
   }

	handleInputChange(e) {
		this.changeStateTodoItemValue(e.target.value)
	}

	handleSubmit (e) {
		e.preventDefault(); //prevent refreshing page after submit
		
		const newTodo = {
			id:uuid(),
			text: this.state.todoItem,
			completed: false,
		}
		const updatedTodos = [...this.state.todos,newTodo];
		this.changeStateTodosValue(updatedTodos);
		this.changeStateTodoItemValue("");
	}

	handleDelete (id) {
		const updatedTodos = this.state.todos.filter(todo => todo.id !== id)
		this.changeStateTodosValue(updatedTodos);
	}

	handleClearList(){
		this.changeStateTodosValue([]);
	}

	handleFilterChange(){
		var updatedTodos=[]
		var hideCompleted=false
		if(this.state.hideCompleted === false){
			updatedTodos = this.state.todos.filter(todo=> todo.completed === false)
			hideCompleted = true
			this.changeStateUnfilteredTodos(this.state.todos);
      	}else{
      		console.log(this.state.unfilteredTodos);
      		updatedTodos = this.state.unfilteredTodos
      		hideCompleted = false
        }
       this.changeStateTodosValue(updatedTodos);
       this.changeStateHideCompleted(hideCompleted);
	}

   render(){
      return(
      	<div className='container'>
      	<CompletedFilter 
      		handleFilterChange={this.handleFilterChange}
      		/>
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
   }



}


