import React from 'react'
import { iqshaService } from 'service/iqsha.service'
import { useQuery } from "@tanstack/react-query";
import GameItem from './GameItem/GameItem';
import style from './gameList.module.scss'
import { Link } from 'react-router-dom';
import Back from 'Layouts/Back/Back';

const GamesTitleList = () => {

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

    return (
        <div>
            <div className="inner-wrapper">
                <div className={style.gamesList}>
                    {data.map((item, index) => <GameItem key={item.id} item={item} />)}
                </div>


                <Back />
            </div>
        </div>
    )
}

export default GamesTitleList