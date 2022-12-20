import React, {useId} from 'react';
import {Form, Formik} from "formik";
import CustomInput from "./CustomInput";
import {schema} from "../utilities/objectHelpers";
import TaskComponent from "./TaskComponent";
import '../stylization/TodoForm.css'

const TodoForm = React.memo(props => {
    let todoElements = props.todoData.map((t, i) => (
        <TaskComponent key={i} id={t.id} content={t.content} markedDone={t.markedDone} {...props}/>
    ))

    const onSubmit = (values, action) => {
        props.addTask(values.content)
        setTimeout(() => {
            action.resetForm()
        }, 1000)
    }
    return (
        <div className='todoForm'>
            <Formik
                initialValues={{content: ''}}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <CustomInput disabled={isSubmitting} label='' name='content' type='text' placeholder='Enter your ToDo thing'/>
                        <button className='submitButton' disabled={isSubmitting} type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
            <div>{todoElements}</div>
        </div>
    );
});

export default TodoForm;