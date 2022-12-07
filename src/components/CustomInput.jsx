import React from 'react';
import {useField} from "formik";

function CustomInput({label, ...props}) {
    const [field, meta] = useField(props)
    // console.log(field)
    return (
        <>
            <label>{label}</label>
            <input {...field} {...props}
            className={meta.error && meta.touched ? '' : ''}/>
            {meta.error && meta.touched ? <div>{meta.error}</div> : ''}
        </>
    );
}

export default CustomInput;