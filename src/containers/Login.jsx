import React,{useState} from 'react';
import { connect } from 'react-redux';
import {loginRequest} from '../actions'
import { Link } from 'react-router-dom';

import '../assets/styles/components/Login.scss'

const Login = (props)=>{
    const [form, setValue] = useState({
        email:''
    })
    
    const handleInput = event =>{
        setValue({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        
        event.preventDefault();
        
        props.loginRequest(form);
        props.history.push('/')
        
    }
    
    return (

        <section className="login">
        
            <div className="login__container">
                <h2>Log in</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input value={form.email} onChange={handleInput} name="email" className="input1" type="text" placeholder="Email"/>
                    <input value={form.password} onChange={handleInput} name="password" className="input1" type="password" placeholder="Password" />
                    <button className="button">Log in</button>
                    <div className="login__container--remember">
                        <label for=""> <input type="checkbox" id="checkbox1" value="checkbox"/> Remember me</label>
                        <a href="">I forgot my password =(</a>
                    </div>
                </form>
                <div className="login__container--media">
                    <div><img src="https://img.icons8.com/nolan/64/000000/google-logo.png" alt="Google"/>Log in with your google account</div>
                    <div><img src="https://img.icons8.com/nolan/64/000000/steam.png" alt="Steam"/>Log in with your steam account</div>
                </div>
                <p className="login__container--register">You don't have an account? 

                <Link to="/register" className="login__container--register-2">
                        Register
                </Link>
                
                </p>

            </div>

        </section>
)}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null,mapDispatchToProps)(Login)