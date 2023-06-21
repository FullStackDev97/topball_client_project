import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';
import api from '../api/api';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [user_name, setUserName] = useState('');
    const [date_birth, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useAuth();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        /*console.log(email)
        console.log(password)*/
        if (password !== '' && email !== '') {
            try {
                const result = await api.signup('http://localhost:8000/user/signup',
                    {
                        last_name,
                        first_name,
                        user_name,
                        email,
                        password,
                        date_birth
                    }
                )
                if (result.status === 200 && result.logged) {
                    authCtx.signup('user', { ...result })
                    
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
        }else if (e.target.name === 'user_name') {
            setUserName(e.target.value);
        }else if (e.target.name === 'last_name') {
            setLastName(e.target.value);
        }else if (e.target.name === 'first_name') {
            setFirstName(e.target.value);
        }else if (e.target.name === 'date_birth') {
            setBirthDate(e.target.value);
        }
    }



    return (
        <>
            <form  onSubmit={(e) => handlerSubmit(e)} onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/user/signup">

                <label htmlFor="first_name" className="form-label">first name</label>
                <input type="text" className="form-control" name="first_name" id="first_name" />

                <label htmlFor="last_name" className="form-label">last name</label>
                <input type="text" className="form-control" name="last_name" id="last_name" />

                <label htmlFor="user_name" className="form-label">user name</label>
                <input type="text" className="form-control" name="user_name" id="user_name" />
                <label htmlFor="date_birth" className="form-label">birth date</label>
                <input type="date" max={"2005-12-31"} className="form-control" name="date_birth" id="date_birth" />

                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="form-control" name="email" id="email" />

                <label htmlFor="password" className="form-label">password</label>
                <input type="password" className="form-control" name="password" id="password" />
                
                <div className="d-flex mt-3 justify-content-center">
                    <input type="submit" className="btn btn-primary" value="Sign up" />
                </div>

            </form>
        </>
    )
}

export default SignUp;