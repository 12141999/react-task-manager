import React  from 'react';


class TodoTask extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        isEdit: false      }
    }
    
    deleteTask = () => {
      const { id , deleteTask } = this.props
      deleteTask(id)
    }
    
    editTask = () => {
      this.setState({
        isEdit: true
      })
    }
    
    
    saveEditTask = (e) => {
      e.preventDefault()
      
      const {id} = this.props
      const {saveEditTask} = this.props
      
      if(!this.editInput.value) {
        null
      }
      else {
        saveEditTask(this.editInput.value, id)
        this.setState({
          isEdit: false
        })
      }
      
    }
    
  
    render() {
      const {task, type} = this.props
      const {isEdit, isComplete} = this.state
      const disableBtn = isComplete && 'disable-btn'
      
      return (
          <li>        
            {
            isEdit ?
              <form
                id="edit-task-form"
                onSubmit={this.saveEditTask}>
                <input 
                  defaultValue={task}
                  ref={editInput => this.editInput = editInput} 
                  />
                <button>Save</button>
              </form>
              :
              <div>
              <p 
                className={isComplete && 'completed'}>
                {task} <span>{type}</span>
              </p>
                <button 
                  className='delete-btn'
                  onClick={this.deleteTask}>
                  Delete
              </button>
                <button
                  className={disableBtn}
                  disabled={isComplete}
                  onClick={this.editTask}>
                  Edit
              </button>
              </div>
          }
          </li>
      )
    }
  }

  export default TodoTask;