import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from 'utils/firestore';
import style from './report.module.scss'
import getRandomId from 'utils/getRandomId';

const Report = () => {
    const [data, setData] = useState([])



    useEffect(() => {
        async function readData() {
            const q = query(collection(db, "data"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setData((prev) => [...prev, { name: doc.id, result: doc.data().result }])
            });
        }
        readData();

    }, [])


    const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`

    if (localStorage.getItem('userName') === "admin") {
        return (
            <div>
                <div style={{textAlign : 'center', paddingTop : '50px'}}>Отчет на {date}</div>
                <table className={style.table}>
                    {data.map((el,) => (
                        <div key={getRandomId()} className={style.column}>
                            <div className={style.name}>{el.name}</div>
                            <div className={style.result}>
                                {el.result.length !== 0 ? (
                                    el.result.map((item, index) =>
                                        <div key={getRandomId()} className={style.item}>{index + 1}.
                                            <div>{item.category}</div>
                                            <div className={style.gameName}>{item.game.gameName}</div>
                                            <div>{item.game.date}</div>
                                            <div>Уровень - {item.game.lvl}</div>
                                            <div>Оценка - {item.result}</div>
                                        </div>
                                    )
                                )
                                    : (
                                        <div style={{ textAlign: 'center' }}>Нет результатов</div>
                                    )
                                }

                            </div>
                        </div>

                    ))}
                </table>
            </div>
        )
    } else {
        return (
            <div>You not have access to visit this page</div>
        )
    }


}

export default Report