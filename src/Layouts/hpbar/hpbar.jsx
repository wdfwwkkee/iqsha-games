import React, { useState } from 'react'
import NumberSeries from 'components/pages/MathGames/number_series/NumberSeries';
import { toast } from 'react-toastify';

const hpbar = () => {
    let starthp;
    const [hp, setHp] = starthp.useState(3);
    function hploss() {
      if (NumberSeries.incorrectAnswer === true) {
        setHp(prev - 1);
      }
      if (hpp === 0) {
        toast.error('You are dead');
      }
    }
  return (
    <div>
      <div>

        <div>your hp</div>

      </div>

    </div>
  )
}

export default hpbar