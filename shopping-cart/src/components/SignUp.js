import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false
    })
    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({...data,[event.target.name]:event.target.checked})
        } else {
            setData({...data,[event.target.name]:event.target.value})
        }
    }
    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' name='password' value={data.password} onChange={changeHandler} />
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <input type='text' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} />
                </div>
                <div>
                    <label>isAccepted</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} />
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <button type='submit'>SignUp</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;