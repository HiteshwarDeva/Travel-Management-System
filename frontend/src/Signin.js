import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import validation from "./SigninValidation";
import './Signin.css';

const Signin = () => {
    const [values, setValues] = useState({
        name: '',
        username: '',
        password: ''
    });
    const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        console.log("Hello user")
        console.log(validationErrors);

        if (Object.keys(validationErrors).length === 3) {
            console.log(23)
            try {
                const response = await axios.post('http://localhost:5000/signup', values);
                console.log('Signup successful:', response.data);
                setIsSignupSuccessful(true);
                window.alert('Succesful SignUp. Please move to login page');
            } catch (error) {
                console.error('Signup error:', error.response ? error.response.data : error.message);
                setErrors({ submit: 'Signup failed. Please try again.' });
            }
        }
    };

    return (
        <div className="bg-container">
            <div className="card-container">
                <h1 className='headingEl'>Sign-Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className='labelEl' htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Name" name="name"
                            onChange={handleInput} className="form-control rounded-0 inputEl" />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                    <div className="mb-3">
                        <label className='labelEl' htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter username" name="username"
                            onChange={handleInput} className="form-control rounded-0 inputEl" />
                        {errors.username && <span className="text-danger">{errors.username}</span>}
                    </div>
                    <div className="mb-3">
                        <label className='labelEl' htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" name="password"
                            onChange={handleInput} className="form-control rounded-0 inputEl" />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="signin-btn">Sign Up</button>
                    {errors.submit && <p className="text-danger">{errors.submit}</p>}
                    <br />
                    {isSignupSuccessful && (
                        <Link to="/" className="btn btn-primary">Log In</Link>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Signin;
