import React from 'react'
import style from './game-item.module.scss'
import { Link } from 'react-router-dom';
import AccountPage from 'Layouts/AccountPage/AccountPage.jsx';
import { useNavigate } from 'react-router-dom';

const GameItem = ({ item }) => {
    const status = item.status;
    console.log("gamecat")
    const gameImage = item.image;

    const navigate = useNavigate();

    return (
        <div className={style.item} >
            {status ? (
                <Link>
                    <div title='Находится в разработке'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/other/closed.png`} alt="" />
                        <div className={style.itemTitle}>{item.title}</div>
                    </div>
                </Link>
            )
                : (
                    
                    <Link to={`/iqsha-games/games/${item.tag}-games`}  >
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/${gameImage}`} alt="" />
                            <div className={style.itemTitle}>{item.title}</div>
                        </div>
                    </Link>
                )
            }

        </div>

    )
}

export default GameItem