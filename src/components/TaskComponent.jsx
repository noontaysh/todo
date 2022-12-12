import React from 'react';

const TaskComponent = (props) => {
    return (
        <div>
            <h3>{props.content}</h3>
            <p>{props.id}</p>
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