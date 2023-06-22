import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import StoreList from "./StoreList";
import api from '../api/api';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    //const user_id  = user.user_id;

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
    return(
         teams.map((team, index) => (
            <>
                <div key={index} className="card m-2">
                    <div className="card-body">
                        <p className="card-title">{team.name}</p>
                        <p>{team.country}</p>
                    </div>
                </div>
            </>
        ))
    )
        


    
}

export default Teams;