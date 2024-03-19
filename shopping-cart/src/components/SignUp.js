import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Style
import styles from "./SignUp.module.css";

//Function
import { validate } from '../helper/validate';
import { notify } from '../helper/toast';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const SignUp = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false
    });
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    useEffect(() => {
        setErrors(validate(data))
    },[data,touched])
    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({
                ...data,
                [event.target.name]:event.target.checked})
        } else {
            setData({...data,
                [event.target.name]:event.target.value})
        }
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
            notify("You Signed in successfuly","success")
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
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                        type='text' name='name' value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>ConfirmPassword</label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} 
                        type='text' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>isAccepted</label>
                        <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link className={styles.loginLink} to="/login">Login</Link>
                    <button type='submit'>SignUp</button>
                </div>
            </form>
        <ToastContainer />
        </div>
    );
};

export default SignUp;