import React, {Component} from 'react'

export default class CompletedFilter extends Component {
	render(){
	const {handleFilterChange} = this.props;
	return(
	 <div className="todo-filter-completed">
         <label class="checkbox-container">
         <input type="checkbox"  onChange={handleFilterChange}/>
         <span className="checkmark"></span>
         Hide completed
         </label>
      </div>
      )
	}

}