import React from 'react';
import '../stylization/TaskComponent.css'

const TaskComponent = (props) => {
    return (
        <div className='taskComponent'>
            <h3>{props.content}</h3>
            {/*<p>{props.id}</p>*/}
            {props.markedDone ? (<input type="checkbox" onClick={() => {
                props.unMark(props.id)
            }} checked={true}/>) : (<input type="checkbox" onClick={() => {
                props.markDone(props.id)
            }} checked={false}/>)}
            <button onClick={() => {props.deleteTask(props.id)}}>Del</button>
        </div>
    );
};

export default TaskComponent;