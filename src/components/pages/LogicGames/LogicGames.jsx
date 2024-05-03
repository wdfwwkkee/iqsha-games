import React from 'react'
import { iqshaService } from 'service/iqsha.service'
import { useQuery } from "@tanstack/react-query";
import Game from '../../../Layouts/Games/Game';
import { Link } from 'react-router-dom';
import style from './logic_games.module.scss'

const LogicGames = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["gameData"],
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
          {data.games.map((item, index) => <Game key={item.id} item={item} />)}
        </div>


        <div className="back">
          <Link to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LogicGames