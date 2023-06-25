import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import StoreList from "./StoreList";
import Modal from 'react-bootstrap/Modal';
import TeamCreate from "../components/TeamCreate";
import api from '../api/api';


const Teams = () => {
    const [teams, setTeams] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        api.getAll(`http://localhost:8000/user/teams?u_id=${user.user_id}`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        }).then((data) => {
            console.log(data);
            setTeams(data);

        });
    }, []);
    return (

        <>
            <h2 className="my-5 fs-1 text-light">My teams</h2>

            <div className="d-flex justify-content-end">
                <button onClick={handleShow} className="btn btn-outline-primary my-2">
                    Add new Team
                </button>
            </div>


            {teams.map((team, index) => (
                <div key={index} className="card mb-5">
                    <div className="card-body d-flex justify-content-between">
                        <div className="col-10">
                            <p className="card-title">{team.name}</p>
                            <p>{team.country}</p>
                        </div>

                        <div className="d-flex flex-column justify-content-between col-1">
                            <button className="w-75 btn btn-success my-2"><img className="w-50" src="src/assets/eye-regular.svg" alt="see" /></button>
                            <button className="w-75 btn btn-primary my-2"><img className="w-50" src="src/assets/pen-to-square-solid.svg" alt="edit" /></button>
                            <button className="w-75 btn btn-danger my-2"><img className="w-50" src="src/assets/trash-can-solid.svg" alt="delete" /></button>
                        </div>
                    </div>

                </div>
            ))}

            <Modal className='mt-5' show={show} onHide={handleClose}>

                <Modal.Body>
                    <TeamCreate></TeamCreate>
                </Modal.Body>

            </Modal>
        </>

    )




}

export default Teams;