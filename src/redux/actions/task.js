export const createTodo = (payload)=> {
    return({
        type: 'CREATE_TODO',
        payload
    })
}

export const editTodo = (payload)=> {
    return({
        type: 'EDIT_TODO',
        payload
    })
}

export const checkPress = (payload) => {
    return ({
        type: 'CHECK_PRESS',
        payload
    })
}