import React from 'react'
import style from './game.module.scss'
import { Link } from 'react-router-dom';

const Game = ({ item }) => {

    const gameImage = item.image;
    const gameStatus = item.status;
    console.log(gameImage)

    return (
        <div className={style.item} title="Находится в разработке">
            {gameStatus ? (
                <div>
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