import React from 'react'
import Profil from '../components/Profil'
import Gameone from './Gameone'
import './Game.css'

const Game = () => {
    return (
        <div className='Game'>
            <Gameone />
            <Profil />
        </div>
    )
}

export default Game