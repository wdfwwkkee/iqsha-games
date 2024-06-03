import React from 'react'
import axios from 'axios';

const Contacts = () => {

  async function request(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:5000/iqsha-games/api',
      data: { userName: "asd", age: 1 }
    }).then(response => {
      console.log('Данные успешно отправлены на сервер.');
      console.log(response);
    })
      .catch(error => {
        console.error('Ошибка при отправке данных на сервер:', error);
      });
  }

  return (
    <div>
      <button onClick={request}>req</button>
    </div>
  )
}

export default Contacts