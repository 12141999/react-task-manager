exports.addNewTask = (task , id , type)  => {
    let data = {
        task : task,
        id : id,
        type : type
    }
    return (dispatch) => {
        return dispatch(addTask(data));
    }
}

exports.removeTask = (id)  => {
    return (dispatch) => {
           return dispatch(deleteTask(id));
    }
}

exports.editTask = (task , id)  => {
    let data = {
        task : task,
        id : id
    }
    return (dispatch) => {
           return dispatch(saveEditTask(data));
    }
}

exports.isEditFlagTask = (data)  => {
    return (dispatch) => {
           return dispatch(isEditFlag(data));
    }
}



// exports.addSuvey = (surveyName, empName) => {
//     return (dispatch) => {
//         let formData = new FormData();

//         let entries = formData.entries();
//         for (let pair of entries) {
//             formData.delete(pair[0]);
//         }

//         formData.append('emp', empName);
//         formData.append('survey', surveyName);

//         return axios.post("http://localhost:4000/updateEmpWithSurvey", formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           }
//           ).then((res) => {
//             console.log("get add survey data", res.data.nModified);
//             if(res.data.nModified){
//                  getSurveyData(empName);
//             }
//           }).catch((e) => {
//             console.log("err is occured", e);
//           })
//     }
// }

// exports.removeSurvey = (surveyName , empName) => {
//     let formData = new FormData();

//     let entries = formData.entries();
//     for (let pair of entries) {
//       formData.delete(pair[0]);
//     }

//     formData.append('emp', empName);
//     formData.append('survey', surveyName);

//     return axios.post("http://localhost:4000/removeSurvey", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     }
//     ).then((res) => {
//       console.log("get survey data", res.data);
//       if(res.data.nModified){
//        getSurveyData(empName);
//       }
//     }).catch((e) => {
//       console.log("err is occured", e);
//     })


//   }

// exports.onsubmit =  (data)  => {
//     let formData = new FormData();

//     let entries = formData.entries();
//     for (let pair of entries) {
//       formData.delete(pair[0]);
//     }

//     formData.append('name', data.name);
//     formData.append('survey', data.survey);
//     formData.append('assignedSurvey', data.assignedSurvey);

//     return axios.post("http://localhost:4000/onsubmit", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     }
//     ).then((res) => {
//       console.log("final submit result", res);
//     }).catch((e) => {
//       console.log("err is occured", e);
//     })

//   }

export function addTask(data) {
    console.log("get Emp Dropdown", data);
    return {
        type: "ADD_TASK",
        payload: data
    }
}


export function deleteTask(data) {
    console.log("get Emp Dropdown", data);
    return {
        type: "DELETE_TASK",
        payload: data
    }
}

export function saveEditTask(data) {
    console.log("get Emp Dropdown", data);
    return {
        type: "EDIT_TASK",
        payload: data
    }
}

export function isEditFlag(data) {
    console.log("get Emp Dropdown", data);
    return {
        type: "EDIT_FLAG",
        payload: data
    }
}

