import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';
import api from '../api/api';
import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";
import '../MyOwn.css'
import * as Yup from 'yup';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useAuth();
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).required('required')
    });

    const handlerSubmit = async (e) => {
        //e.preventDefault();

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

            <p className="text-center">Login</p>
            <Formik className='mt-5' initialValues={{ email: '', password: '' }} onSubmit={(e) => handlerSubmit(e)} validationSchema={loginSchema}
            >
                {({ errors, touched }) => (
                    <Form onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/user/login">
                        <label htmlFor="email" className="form-label">email</label>
                        <Field type="email" className="form-control rounded-pill mb-3" name="email" id="email" />
                        {errors.email && touched.email ? (
                            <div className="text-danger">{errors.email}</div>
                        ) : null}

                        <label htmlFor="password" className="form-label">password</label>
                        <Field type="password" className="form-control rounded-pill" name="password" id="password" />
                        {errors.password && touched.password ? (
                            <div className="text-danger">{errors.password}</div>
                        ) : null}

                        <div className="d-flex my-4 justify-content-center">
                            <input type="submit" className="fs-5 btn-red-obscur rounded-pill" value="Sign in" />
                        </div>

                    </Form>
                )}
            </Formik>
            <div className="d-flex justify-content-center">
                <Link className="text-center my-3">mot de passe oublié ?</Link>
            </div>


        </>
    )
}

export default Login;