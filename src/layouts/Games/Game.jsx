import React from 'react'
import style from './game.module.scss'
import { Link } from 'react-router-dom';

const Game = ({ item }) => {

    const gameImage = item.image;

    return (
        <Link className={style.item}>
            <div>
                <img src={`${process.env.PUBLIC_URL}/${gameImage}`} alt="" />
                <div className={style.gameName}>{item.name}</div>
            </div>
        </Link>
    )
}

export default Game