import React from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import {editTodo} from '../redux/actions/task'

function Edit(props) {
    const {id} = props.match.params
    const data = props.todo.task.filter(item=>item.id===Number(id))[0]
    const goBack = ()=> {
        props.history.goBack()
    }

    const [taskName,changeTaskName] = React.useState(data.taskName)
    const [description,changeDescription] = React.useState(data.description)

    const saveData = ()=>{
        props.editTodo({
            id,
            taskName,
            description
        })
        props.history.push('/')
    }

    return (
        <div className="content">
            <div className="title-bar">
                <span onClick={goBack} className="left">Back</span>
                <span className="title">Edit "{data.taskName}"</span>
                <span onClick={saveData} className="right">Save</span>
            </div>
            <div className="my-5">
                <Form>
                    <Form.Label className="w-100">
                        <span>Task Name</span>
                        <Form.Control onChange={e=>changeTaskName(e.target.value)} type="text" defaultValue={data.taskName} />
                    </Form.Label>

                    <Form.Label className="w-100">
                        <span>Description</span>
                        <Form.Control onChange={e=>changeDescription(e.target.value)} as="textarea" defaultValue={data.description} rows={5} />
                    </Form.Label>
                </Form>
            </div>
        </div>
    )
}

export default connect(state=>({todo:state.todo}), {editTodo})(Edit)