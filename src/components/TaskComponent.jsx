import React from 'react';
import '../stylization/TaskComponent.css'
import DeleteIcon from '@material-ui/icons/Delete';

const TaskComponent = (props) => {
    return (
        <div className='taskComponent strike'>
            {props.markedDone ? <strike><h3>{props.content}</h3></strike> : <h3>{props.content}</h3>}
            {/*<p>{props.id}</p>*/}
            {props.markedDone ? (<input type="checkbox" onClick={() => {
                props.unMark(props.id)
            }} checked={true}/>) : (<input type="checkbox" onClick={() => {
                props.markDone(props.id)
            }} checked={false}/>)}
            <DeleteIcon className='deleteIcon' onClick={() => {props.deleteTask(props.id)}} color='secondary' />
        </div>
    );
};

export default TaskComponent;