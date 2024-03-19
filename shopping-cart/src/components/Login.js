import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from "./SignUp.module.css"

//Function
import { validate } from '../helper/validate';
import { notify } from '../helper/toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Login = () => {
    const [data,setData] = useState({
        email : "",
        password : "",
    });
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    useEffect(() => {
        setErrors(validate(data,"Login"))
    },[data,touched])
    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]:event.target.value})
    };
    const focusHandler = (event) => {
        setTouched({
            ...touched,
            [event.target.name]:true
        })
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Loged in successfuly","success")
        } else {
            notify("Invalid data","error");
            setTouched({
                name : true,
                email : true,
                password : true,
                confirmPassword : true,
                isAccepted : true
            })
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                        type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                        type='text' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link className={styles.loginLink} to="/signup">SignUp</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
        <ToastContainer />
        </div>
    );
};

export default Login;