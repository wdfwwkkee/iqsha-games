import React, { useState } from 'react'
import NumberSeries from 'components/pages/MathGames/number_series/NumberSeries';
import { toast } from 'react-toastify';

const HealthBar = ({answer}) => {
  let starthp;
  const [hp, setHp] = useState(3);
  function hploss(answer) { 
    if (answer === true) {
      setHp((prev) => prev - 1);
    }
    if (hp === 0) {
      toast.error('You are dead');
    }
  }
  return (
    <div>
      <div>

        <div>your hp - {hp}</div>

      </div>

    </div>
  )
}

export default HealthBar