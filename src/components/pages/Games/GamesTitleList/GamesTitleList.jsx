import React from 'react'
import { iqshaService } from 'service/iqsha.service'
import { useQuery } from "@tanstack/react-query";
import GameItem from './GameItem/GameItem';
import style from './gameList.module.scss'
import { Link, useNavigate } from 'react-router-dom';


const GamesTitleList = () => {
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["data"],
        queryFn: () => {
            return iqshaService.getAllGames();
        },
    });

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (isError) {
        return (
            <div>Error</div>
        )
    }


    function logout() {
        localStorage.removeItem('userName')
        navigate('/iqsha-games/register')
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'stretch', justifyContent: 'center', textAlign: 'center', padding: '15px 0px' }}>Текущий пользователь : {localStorage.getItem('userName')} {localStorage.getItem('userName') === "admin" ? <Link className={style.exitBtn} to={"report"}>Отчет</Link> : null} <button onClick={logout} className={style.exitBtn}>Выйти</button> </div>
            <div className="inner-wrapper">
                <div className={style.gamesList}>
                    {data.map((item, index) => <GameItem key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default GamesTitleList