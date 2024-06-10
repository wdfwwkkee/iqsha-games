import React, { useEffect } from 'react'
import style from './game.module.scss'
import { Link, useNavigate } from 'react-router-dom';

const Game = ({ item }) => {

    const gameImage = item.image;
    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem('userName'))) {
            navigate('/iqsha-games/register')
        }
    }, [])
    const gameStatus = item.status;

    return (
        <div className={style.item}>
            {gameStatus ? (
                <div title="Находится в разработке">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/other/closed.png`} alt="" />
                    <div className={style.gameName}>{item.name}</div>
                </div>
            )
                : (
                    <Link to={`${item.tag}`}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/${gameImage}`} alt="" />
                            <div className={style.gameName}>{item.name}</div>
                        </div>
                    </Link>
                )
            }
        </div >

    )
}

export default Game