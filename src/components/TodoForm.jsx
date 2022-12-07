import React from 'react';
import {Field, Form, Formik} from "formik";
import CustomInput from "./CustomInput";
import {schema} from "../utilities/objectHelpers";

const TodoForm = (props) => {
    const onSubmit = (values, action) => {
        props.addTask(values.content)
        setTimeout(() => {
            action.resetForm()
        }, 1000)
    }
    return (
        <div>
            <Formik
                initialValues={{content: ''}}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <CustomInput label='' name='content' type='text' placeholder='Enter your ToDo thing'/>
                        <button disabled={isSubmitting} type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default TodoForm;