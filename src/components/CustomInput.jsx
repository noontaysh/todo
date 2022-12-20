import React from 'react';
import {useField} from "formik";
import '../stylization/CustomInput.css'

function CustomInput({label, ...props}) {
    const [field, meta] = useField(props)
    // console.log(field)
    return (
        <div className='customInput'>
            <label>{label}</label>
            <input {...field} {...props}
            className={meta.error && meta.touched ? '' : ''}/>
            {meta.error && meta.touched ? <div>{meta.error}</div> : ''}
        </div>
    );
}

export default CustomInput;