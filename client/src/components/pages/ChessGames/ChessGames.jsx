import Game from 'Layouts/Games/Game';
import React from 'react'
import { iqshaService } from 'service/iqsha.service'
import { useQuery } from "@tanstack/react-query";
import style from './chess_games.module.scss'
import Back from 'Layouts/Back/Back';


const ChessGames = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chessGame"],
    queryFn: () => {
      return iqshaService.getGameById(1);
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

export default ChessGames