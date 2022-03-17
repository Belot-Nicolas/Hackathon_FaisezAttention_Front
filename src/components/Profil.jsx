import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Profil.css'

const Profil = () => {
    const [userData, setUserData] = useState([{}]);
    let {email} = useParams()

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/users/email/${email}`)
            .then((res) => res.data)
            .then((data) => setUserData(data))
    }, [])
    console.log(userData)
    return (
        <div className='Profil'>
            <div className='avatar-container'>
            <img 
            src={userData[0].avatar} 
            alt={userData[0].firstname}
            className='profil-picture' />
            </div>
            <div className='info-container'>
                <h2>Bonjour </h2>
                <h2> {userData[0].firstname} </h2>
            </div>
            <div className='info-container'>
            <h2>Dernière partie </h2>
            {userData.map((game) =>{
                return (<p>{game.name} score : {game.score}</p>)
            })}
            </div>
            
            
        </div>
    )
}

export default Profil