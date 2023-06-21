import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';
import api from '../api/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useAuth();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        /*console.log(email)
        console.log(password)*/
        if (password !== '' && email !== '') {
            try {
                const result = await api.login('http://localhost:8000/user/login',
                    {
                        email,
                        password
                    }
                )
                if (result.status === 200 && result.logged) {
                    authCtx.login('user', { ...result })
                    
                }
            } catch (err) {
            }
        }
    }

    const handlerChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }



    return (
        <>
            <form  onSubmit={(e) => handlerSubmit(e)} onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/user/login">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="form-control" name="email" id="email" />
                <label htmlFor="password" className="form-label">password</label>
                <input type="password" className="form-control" name="password" id="password" />
                <div className="d-flex mt-3 justify-content-center">
                    <input type="submit" className="btn btn-primary" value="Sign in" />
                </div>

            </form>
        </>
    )
}

export default Login;