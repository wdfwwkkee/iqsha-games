import React from 'react'
import { iqshaService } from 'service/iqsha.service'
import { useQuery } from "@tanstack/react-query";
import Game from '../../../Layouts/Games/Game';
import { Link } from 'react-router-dom';
import style from './logic_games.module.scss'
import Back from 'Layouts/Back/Back';
// import Header from 'Layouts/LayoutsHome/Header';

const LogicGames = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["logicGame"],
    queryFn: () => {
      return iqshaService.getGameById(4);
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
        <div className={style.list}>
          {data.games.map(item => <Game key={item.id} item={item} />)}
        </div>
        <Back />
      </div>
    </div>
  )
}

export default LogicGames