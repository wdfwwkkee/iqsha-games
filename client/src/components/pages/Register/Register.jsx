import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    const navigate = useNavigate()
    const [name, setName] = useState('')

    function auth() {
        if (name.length > 5) {
            localStorage.setItem('userName', name)
            navigate('/iqsha-games')
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