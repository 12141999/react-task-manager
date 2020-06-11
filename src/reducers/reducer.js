let initialState = {
    tasks: [
        {
          id: 1,
          task: 'Meeting Today',
          type: 'Business'
        },
        {
          id: 2,
          task: 'Work Out',
          type: 'Personal'
        }, {
          id: 3,
          task: 'Learn React',
          type: 'Personal'
        }
      ],
      searchTaskValue: '',
      completedTask: [],
      isEdit : false,
      isComplete : false
}

const mainReducer = (state = initialState, action) => {
    console.log("mainreducer", action);
    if (action.type === "ADD_TASK") {
    //     let k = state.tasks;
    //    const addTasks =  k.push( action.payload);
    //  state.tasks.push(action.payload);
    //    console.log("in reducer" , state)
        return {
            ...state,
            tasks : [
                ...state.tasks,
                action.payload
            ]
            // tasks : addTasks
        }

    }
    else if (action.type === "DELETE_TASK") {
        const filterTasks = state.tasks.filter(task => task.id !== action.payload)
        return{
            ...state,
            tasks : filterTasks
        }
    }
    else if (action.type === "EDIT_TASK") {
        let k = state.tasks;
       const editedTask =  k.map(todo => {
            if(todo.id === action.payload.id) {
              todo.task = action.payload.task
            }
        })
        console.log("in edit reducer" , editedTask);
        return{
            ...state,
            tasks : [
                ...state.tasks
            ]
        }
    }
    // else if (action.type === "EDIT_FLAG") {
    //     console.log("in edit flag reducer" , state);
    //     return{
    //         ...state,
    //         isEdit : action.payload
    //     }
    // }
    else {
        return {
            ...state
        }
    }
}

export default mainReducer;