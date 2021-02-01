import React from 'react'
import {Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import {createTodo} from '../redux/actions/task'

function Add(props) {
    const goBack = ()=> {
        props.history.goBack()
    }

    const [taskName,changeTaskName] = React.useState('')
    const [description,changeDescription] = React.useState('')

    const saveData = ()=>{
        props.createTodo({
            taskName,
            description
        })
        props.history.push('/')
    }

    return (
        <div className="content">
            <div className="title-bar">
                <span onClick={goBack} className="left">Back</span>
                <span className="title">Add new Task</span>
                <span onClick={saveData} className="right">Save</span>
            </div>
            <div className="my-5">
                <Form>
                    <Form.Label className="w-100">
                        <span>Task Name</span>
                        <Form.Control onChange={e=>changeTaskName(e.target.value)} type="text" placeholder="Enter your task name" />
                    </Form.Label>

                    <Form.Label className="w-100">
                        <span>Description</span>
                        <Form.Control onChange={e=>changeDescription(e.target.value)} as="textarea" placeholder="Enter the description" rows={5} />
                    </Form.Label>
                </Form>
            </div>
        </div>
    )
}

export default connect(state=>({todo:state.todo}), {createTodo})(Add)