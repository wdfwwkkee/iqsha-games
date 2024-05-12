import Header from "Layouts/LayoutsHome/Header";
import React, { useState } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import style from "./number_series.module.scss";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const NumberSeries = () => {
  const [array, setArray] = useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5)
  );

  function checkAnswer(array) {
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (array.toString() === answer.toString()) {
      toast("Молодец!");
    } else {
      toast("Ответ неправильный");
    }
  }

  console.log(array);

  return (
    <div>
      <Header />
      <main>
        <div className={style.title}>Расставь в правильном порядке</div>
        <Reorder.Group
          className={style.list}
          axis="x"
          values={array}
          onReorder={setArray}
        >
          <AnimatePresence>
            {array.map((item) => (
              <Reorder.Item
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item}
                value={item}
              >
                <div className={style.item}>{item}</div>
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
        <button onClick={() => checkAnswer(array)}>Проверить</button>
      </main>

      <ToastContainer />
    </div>
  );
};

export default NumberSeries;
