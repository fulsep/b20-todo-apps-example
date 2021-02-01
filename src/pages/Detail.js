import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Home.css'

function Detail(props) {
    const {id} = props.match.params
    const data = props.todo.task.filter(item=>item.id===Number(id))[0]
    const goBack = ()=> {
        props.history.goBack()
    }
    return (
        <div className="content">
            <div className="title-bar">
                <span className="left" onClick={goBack}>Back</span>
                <span className="title">{data.taskName}</span>
                <span className="right"></span>
            </div>
            <div className="card description">
                {data.description}
            </div>
            <Link to={`/edit/${id}`} className="btn btn-warning btn-block mt-2">Edit</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    todo: state.todo
})

export default connect(mapStateToProps)(Detail)
