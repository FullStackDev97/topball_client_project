import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';
import api from '../api/api';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [user_name, setUserName] = useState('');
    const [date_birth, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useAuth();

    const signUpSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        user_name: Yup.string().required('required'),
        last_name: Yup.string().required('required'),
        first_name: Yup.string().required('required'),
        date_birth: Yup.date().required('required'),
        password: Yup.string().min(8).required('required')
    });

    const handlerSubmit = async (e) => {
        //e.preventDefault();
        //console.log(e.preventDefault);

        
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
        } else if (e.target.name === 'user_name') {
            setUserName(e.target.value);
        } else if (e.target.name === 'last_name') {
            setLastName(e.target.value);
        } else if (e.target.name === 'first_name') {
            setFirstName(e.target.value);
        } else if (e.target.name === 'date_birth') {
            setBirthDate(e.target.value);
        }
    }



    return (
        <>
            <Formik initialValues={{ last_name: '', first_name: '', user_name: '', email: '', password: '', date_birth: '' }} validationSchema={signUpSchema} 
             onSubmit={(e) => handlerSubmit(e)} >
            {({ errors, touched }) => (
                <Form  onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/user/signup">

                    <label htmlFor="first_name" className="form-label">first name</label>
                    <Field type="text" className="form-control" name="first_name" id="first_name" />
                    {errors.first_name && touched.first_name ? (
                        <div className="text-danger">{errors.first_name}</div>
                    ) : null}


                    <label htmlFor="last_name" className="form-label">last name</label>
                    <Field type="text" className="form-control" name="last_name" id="last_name" />
                    {errors.last_name && touched.last_name ? (
                        <div className="text-danger">{errors.last_name}</div>
                    ) : null}

                    <label htmlFor="user_name" className="form-label">user name</label>
                    <Field type="text" className="form-control" name="user_name" id="user_name" />
                    {errors.user_name && touched.user_name ? (
                        <div className="text-danger">{errors.user_name}</div>
                    ) : null}


                    <label htmlFor="date_birth" className="form-label">birth date</label>
                    <Field type="date" max={"2005-12-31"} className="form-control" name="date_birth" id="date_birth" />
                    {errors.date_birth && touched.date_birth ? (
                        <div className="text-danger">{errors.date_birth}</div>
                    ) : null}

                    <label htmlFor="email" className="form-label">email</label>
                    <Field type="email" className="form-control" name="email" id="email" />
                    {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                    ) : null}

                    <label htmlFor="password" className="form-label">password</label>
                    <Field type="password" className="form-control" name="password" id="password" />
                    {errors.password && touched.password ? (
                        <div className="text-danger">{errors.password}</div>
                    ) : null}

                    <div className="d-flex mt-3 justify-content-center">
                        <input type="submit" className="fs-5 btn-red-obscur rounded-pill" value="Sign up" />
                    </div>

                </Form>
                )}
            </Formik>

        </>
    )
}

export default SignUp;