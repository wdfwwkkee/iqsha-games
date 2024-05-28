import Confetti from 'components/UI/Confetti'
import React from 'react'
import { Link } from 'react-router-dom'

const GameOver = () => {
    return (
        <main style={{position : "absolute", top : '42%', left : '38%'}}>
            Молодец ты прошел все уровни!
            <div>
                <Link style={{ textDecoration: "none", color: "blue" }} to={"/iqsha-games"}>Перейти к другим играм</Link>
            </div>
            <Confetti />
        </main>
    )
}

export default GameOver