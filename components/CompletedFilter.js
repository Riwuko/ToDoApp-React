import React, {Component} from 'react'

export default class CompletedFilter extends Component {
	render(){
	const {handleFilterChange} = this.props;
	return(
	 <div className="todo-filter-completed">
         <input type="checkbox" onChange={handleFilterChange}/>
         <div>Hide completed</div>
      </div>
      )
	}

}