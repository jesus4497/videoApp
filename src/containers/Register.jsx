import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss'

const Register = props => {

    const { registerRequest, history } = props;

    const [form, setValue] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleInput = event =>{
        setValue({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        registerRequest(form);
        history.push('/')
        

    }


   return (
    <section className="login">
    
        <div className="login__container1">
            <h2>Register</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>

                <input 
                name="email"
                onChange={handleInput}
                className="input1" 
                type="text" 
                placeholder="Email"
                />

                <input 
                name="name"
                onChange={handleInput}
                className="input1" 
                type="text" 
                placeholder="Username"
                />

                <input 
                name="password"
                onChange={handleInput}
                className="input1" 
                type="password" 
                name="" 
                placeholder="Password" 
                id=""
                />

                <button className="button">Register</button>
                <Link to='/login' className="login__container--form-a">
                    Log in
                </Link>
            </form>
        

        </div>

    </section>
    )
}

const mapDispatchToProps = {
    registerRequest
}

export default connect(null,mapDispatchToProps)(Register)