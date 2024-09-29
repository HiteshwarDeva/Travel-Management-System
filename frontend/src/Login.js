import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios";
import './LoginValidation'
import validation from "./LoginValidation"
import './Login.css'


const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(validation(values));
        try {
            const response = await axios.post('http://localhost:5000/', values);
            localStorage.setItem('token', response.data.token);
            console.log('Login successful:', response.data.token);
            // setIsLoginSuccessful(true);
            // window.alert('Succesful SignUp. Please move to login page');
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            setErrors({ login: 'Invalid credentials. Please try again.' });
        }
    }
    return (
        <div className="bg-container-login">
            <div className="card-container-login">
                <h1 className="headingEl-login">Log-In</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="labelEl-login" htmlFor="userName">Username</label>
                        <input type="text" id="userName" placeholder="Enter username" name="username"
                        onChange={handleInput} className="form-control rounded-0 inputEl-login"/>
                        {errors.username && <span className="text-danger">{errors.username}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="labelEl-login" htmlFor="passwordInput">Password</label>
                        <input type="password" id="passwordInput" placeholder="Enter password" name="password"
                        onChange={handleInput} className="form-control rounded-0 inputEl-login"/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <p className="info-El-login">If does not have an account then Please Sign in</p>
                    <Link to="/signup" className="btn btn-primary mb-2">Sign Up</Link>
                    <br/>
                    {isLoginSuccessful && (
                        <Link to="/home" className="btn btn-primary">Home</Link>
                    )}
                </form>

            </div>
        </div>
    )
}

export default Login