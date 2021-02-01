import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Home.css'

import ListTodo from '../components/ListTodo'

import {checkPress as dispatchCheck} from '../redux/actions/task'

function Home(props) {
    
    const checkPress = (id)=> {
        props.dispatchCheck(id)
    }

    return (
        <div className="content">
            <div className="title-bar">
                <span className="left"></span>
                <span className="title">Todo Apps</span>
                <span className="right"></span>
            </div>
            {props.todo.task.map(todo => {
                return(
                    <ListTodo checkPress={checkPress} id={todo.id} taskName={todo.taskName} isChecked={todo.checked} />
                )
            })}
            <div className="floating-button">
                <Link to="/add" className="btn btn-primary rounded-circle">+</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todo: state.todo
})

export default connect(mapStateToProps, {dispatchCheck})(Home)