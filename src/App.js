import React  from 'react';
import TodoTask from './containers/todoTask';
import AddTaskForm from './containers/addTask';
import * as actionCreators from './actions/action.js';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   tasks: [
    //     {
    //       id: 1,
    //       task: 'Meeting Today',
    //       type: 'Business'
    //     },
    //     {
    //       id: 2,
    //       task: 'Work Out',
    //       type: 'Personal'
    //     }, {
    //       id: 3,
    //       task: 'Learn React',
    //       type: 'Personal'
    //     }
    //   ],
    //   searchTaskValue: '',
    //   completedTask: []
    // }
  }
  
  deleteTask = (id) => {

    const {deleteTask } = this.props;
    deleteTask(id);

    // const {tasks, completedTask} = this.state;
    // const filterTasks = tasks.filter(task => task.id !== id)
    // const clearCompleted = completedTask.length > 0 && completedTask.filter(task => task.id !== id)
    
    // this.setState({
    //   tasks: filterTasks,
    //   completedTask: clearCompleted
    // })
  }
  
  addTask = (task, id, type) => {

    const {addNewTask , tasks} = this.props;
    addNewTask(task,id,type);

    // const {tasks} = this.state
    let k  = tasks;
    
    k.push({task, id, type})

    console.log("robin jain" , k)
    
    // this.setState({
    //   tasks: tasks
    // })
  }
  
  saveEditTask = (task, id) => {

    const {editTask} = this.props;
    editTask(task , id);

    // const { tasks } = this.state
    // tasks.map(todo => {
    //   if(todo.id === id) {
    //     todo.task = task
    //   }
    // })
    // this.setState({tasks})
  }
  
  // searchTask = (taskName) => {
  //   this.setState({searchTaskValue: taskName})
  // }

  // completeTask = (id) => {
  //   const {completedTask, tasks} = this.state
  //   const completed = tasks.filter(task => task.id === id)
    
  //   completedTask.push(...completed)
  //   this.setState({
  //     completedTask
  //   })
  // }
  
  render() {
    console.log("11111111" , this.props);
    const {tasks, searchTaskValue, completedTask} = this.props;
    
    // const calculateCompletedTask = (completedTask.length / tasks.length)* 100 ;
    // const percentage = calculateCompletedTask.toFixed(0)
    // console.log(`${percentage}%`)
    
    // get todays date
    const d = new Date()
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()
    
    // const searchFilter = tasks
    //                   .filter(todo => 
    //                    todo.task.toLowerCase().includes(searchTaskValue.toLowerCase()) 
    //                    || 
    //                    todo.type.toLowerCase().includes(searchTaskValue.toLowerCase()))
    
    
    return (
      <div id="app">

        <header>
          <div className="date">
            <TodaysDate day={day} month={month} date={date} year={year} />
          </div>
          <div className="type-of-tasks">
            <PersonalTask tasks={tasks} />
            <BusinessTask tasks={tasks} />
          </div>
          {/* <div className="task-completion">
            <span>{percentage === 'NaN' ? 0 : percentage }% done</span>
          </div> */}
        </header>
        
        {/* {tasks.length > 1 && <SearchTask searchTask={this.searchTask} />} */}
        
        <ul>
          {
            tasks.map(todo => 
            <TodoTask key={todo.id}
              {...todo}
              deleteTask={this.deleteTask}
              saveEditTask={this.saveEditTask}
              completeTask={this.completeTask}
              />)
          }
        </ul>
        

        <AddTaskForm addTask={this.addTask}/>
        
      </div>
    )
  }
}

// filter list to check type & retrieve length
const TypeCount = (list, type) => <p>{list.filter(l => l.type == type).length} <span>{type}</span></p>;

const PersonalTask = ({tasks}) => TypeCount(tasks, 'Personal');
const BusinessTask = ({tasks}) => TypeCount(tasks, 'Business');

const TodaysDate = ({day, month, date, year}) => <p>{day} <span>{month} {date}, {year}</span></p>


// class SearchTask extends React.Component {
  
//   searchTask = () => {
//     const searchValue = this.searchInput.value
//     const {searchTask} = this.props
//     searchTask(searchValue);
//   }
  
//   render() {
//     return (
//       <div id="search-field">
//         <input 
//           type="text"
//           placeholder="Search Task"
//           onChange={this.searchTask}
//           ref={input => this.searchInput = input} />
//         <i className="fa fa-search"></i>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps , actionCreators)(App);
