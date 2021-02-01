import React from 'react'
import {Link} from 'react-router-dom'

export default function ListTodo(props) {
    return (
        <div className="card list-todo">
            <Link to={`/detail/${props.id}`}>
                <span>{props.taskName}</span>
            </Link>
            <label>
                <input onChange={()=>props.checkPress(props.id)} type="checkbox" checked={props.isChecked} />
            </label>
        </div>
    )
}
