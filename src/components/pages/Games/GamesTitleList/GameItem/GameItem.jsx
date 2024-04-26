import React from 'react'
import style from './game-item.module.scss'
import { Link } from 'react-router-dom';

const GameItem = ({ item }) => {
    console.log(item)
    const gameImage = item.image;
    return (
        <Link className={style.item} to={`/games/${item.tag}-games`}>
            <div>
                <img src={`${process.env.PUBLIC_URL}/${gameImage}`} alt="" />
                <div className={style.itemTitle}>{item.title}</div>
            </div>
        </Link>
    )
}

export default GameItem