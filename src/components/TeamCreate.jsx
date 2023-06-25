import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';
import api from '../api/api';
import { Formik, Form, Field } from 'formik';
import { Link } from "react-router-dom";
import '../MyOwn.css'
import * as Yup from 'yup';

const TeamCreate = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const authCtx = useAuth();
    const teamSchema = Yup.object().shape({
        name: Yup.string().min(4).required('Required'),
        country: Yup.string().required('required')
    });

    const handlerSubmit = async (e) => {
        //e.preventDefault();

        if (name !== '' && country !== '') {
            try {
                const result = await api.login('http://localhost:8000/user/team/create',
                    {
                        name,
                        country,
                        user_id: user.user_id
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
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'country') {
            setCountry(e.target.value);
        }
    }



    return (
        <>

            <p className="text-center">Create team</p>
            <Formik className='mt-5' initialValues={{ email: '', password: '' }} onSubmit={(e) => handlerSubmit(e)} validationSchema={teamSchema}
            >
                {({ errors, touched }) => (
                    <Form onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/user/team/create">
                        <label htmlFor="name" className="form-label">name</label>
                        <Field type="text" className="form-control rounded-pill mb-3" name="name" id="name" />
                        {errors.name && touched.name ? (
                            <div className="text-danger">{errors.name}</div>
                        ) : null}

                        <label htmlFor="country" className="form-label">country</label>
                        <Field type="text" className="form-control rounded-pill" name="country" id="country" />
                        {errors.country && touched.country ? (
                            <div className="text-danger">{errors.country}</div>
                        ) : null}

                        
                        <Field type="hidden" className="form-control rounded-pill"  name="user_id" id="user_id" value={user.user_id} />

                        <div className="d-flex my-4 justify-content-center">
                            <input type="submit" className="fs-5 btn-red-obscur rounded-pill" value="Create team" />
                        </div>

                    </Form>
                )}
            </Formik>



        </>
    )
}

export default TeamCreate;