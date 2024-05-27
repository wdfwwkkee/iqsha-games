import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getRandomId from 'utils/getRandomId'

const Register = () => {


    const navigate = useNavigate()
    const [name, setName] = useState('')


    async function request(mark, name) {
        axios({
            method: 'post',
            url: 'http://localhost:5000/iqsha-games/setData',
            data: { id: getRandomId(), userName: localStorage.getItem('userName'), results: [] }
        }).then(response => {
            console.log('Данные успешно отправлены на сервер.');
            console.log(response);
        })
            .catch(error => {
                console.error('Ошибка при отправке данных на сервер:', error);
            });
    }
    function auth() {
        if (name.length > 5) {
            localStorage.setItem('userName', name)
            navigate('/iqsha-games')
            request();
        }
        else {
            alert("Пожалуйста введите ваше полное ФИО")
        }
    }

    return (
        <div style={{ display: 'flex', height: "90vh", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ marginBottom: 50 }}>Введите свое полное ФИО</div>
            <div style={{ display: 'flex', alignItems: 'stretch' }} >
                <input style={{ height: 50, width: 300, fontSize: 20 }} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='ФИО' />
                <button style={{ height: 50 }} onClick={auth}>Войти</button>
            </div>
        </div>
    )
}

export default Register