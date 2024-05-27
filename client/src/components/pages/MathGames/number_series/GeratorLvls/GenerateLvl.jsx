import React from 'react'
import style from './generatelvl.module.scss'
import { AnimatePresence, Reorder } from "framer-motion";

import 'react-toastify/dist/ReactToastify.css';



const GenerateLvl = ({ array, setArray }) => {


   

    return (
        <div>
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



        </div>
    )
}

export default GenerateLvl