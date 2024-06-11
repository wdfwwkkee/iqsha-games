import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from 'utils/firestore'


const Register = () => {


    const navigate = useNavigate()
    const [name, setName] = useState('')






    async function auth() {
        if (name !== "admin") {
            if (name.length >= 6) {
                try {
                    const docRef = doc(db, "data", name);
                    const docSnap = await getDoc(docRef);
                    if (!(docSnap.exists())) {
                        await updateDoc(docRef, {
                            userName: name,
                            result: [],
                        });
                    }
                } catch (error) {
                    const docRef = doc(db, "data", name);
                    await setDoc(docRef, {
                        userName: name,
                        result: [],
                    });
                }
                localStorage.setItem('userName', name)
                navigate('/iqsha-games')
            }
            else {
                alert("Введите полное ФИО")
            }

        } else {
            localStorage.setItem('userName', name)
            navigate('/iqsha-games')
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