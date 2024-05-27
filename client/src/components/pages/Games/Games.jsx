import React, { useEffect } from 'react'

import GamesTitleList from './GamesTitleList/GamesTitleList'
import { useNavigate } from 'react-router-dom'

const Games = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem('userName'))) {
            navigate('/iqsha-games/register')
        }
    }, [])


    return (
        <div>
            <GamesTitleList />
        </div>
    )
}

export default Games