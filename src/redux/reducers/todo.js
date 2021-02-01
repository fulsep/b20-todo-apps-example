const initialTask = {
    task: [
        {
            id: 1,
            taskName: 'Take a shower',
            description: 'Lorem ipsum dolor sit amet',
            createdAt: new Date().toLocaleDateString('en'),
            checked: false
        },
        {
            id: 2,
            taskName: 'Have a Breakfast',
            description: 'Lorem ipsum dolor sit amet',
            createdAt: new Date().toLocaleDateString('en'),
            checked: true
        },
        {
            id: 3,
            taskName: 'Workout',
            description: 'Lorem ipsum dolor sit amet',
            createdAt: new Date().toLocaleDateString('en'),
            checked: false
        },
    ]
}

const todo = (state=initialTask, action)=>{
    switch(action.type){
        case 'CREATE_TODO': {
            const task = [...state.task]
            task.push({
                id: new Date().getTime(),
                taskName: action.payload.taskName,
                description: action.payload.description,
                createdAt: new Date().toLocaleDateString('en'),
                checked: false
            })
            return {
                ...state,
                task
            }
        }
        case 'EDIT_TODO': {
            // const task = [...state.task].filter(item=>item.id!==Number(action.payload.id))
            // task.push({
            //     id: new Date().getTime(),
            //     taskName: action.payload.taskName,
            //     description: action.payload.description,
            //     createdAt: new Date().toLocaleDateString('en'),
            //     checked: false
            // })
            const selectedTask = [...state.task].map(item=>item.id).indexOf(Number(action.payload.id))
            const task = [...state.task]
            task[selectedTask].taskName = action.payload.taskName
            task[selectedTask].description = action.payload.description
            return {
                ...state,
                task
            }
        }
        case 'CHECK_PRESS': {
            const selectedTask = [...state.task].map(item=>item.id).indexOf(action.payload)
            const task = [...state.task]
            task[selectedTask].checked = !task[selectedTask].checked
            return {
                ...state,
                task
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default todo