import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import StoreList from "./StoreList";
import api from '../api/api';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    //console.log(user.token)
    

    return (
        <>
            <div>
                <h1 className="mt-4">Choisissez ce que vous cherchez :</h1>
                <p>Teams</p>
            </div>
        </>
    )
}

export default Teams;