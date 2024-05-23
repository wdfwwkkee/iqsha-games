import React from 'react'
import style from './game.module.scss'
import { Link } from 'react-router-dom';

const Game = ({ item }) => {

    const gameImage = item.image;
    console.log("game")

    return (
        <Link className={style.item} to={`${item.tag}`}>
            <div>
                <img src={`${process.env.PUBLIC_URL}/${gameImage}`} alt="" />
                <div className={style.gameName}>{item.name}</div>
            </div>
        </Link>
    )
}

export default Game