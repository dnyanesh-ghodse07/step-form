import React, { useEffect, useState } from "react";
import "./Progress.scss";

function Progress({ step }) {
  const [width, setWidth] = useState(1);

  useEffect(() => {
    if (step === 1) {
      setWidth(20);
    } else if (step === 2) {
      setWidth(40);
    } else if (step === 3) {
      setWidth(60);
    } else {
      setWidth(100);
    }
  }, [step]);
  return (
    <div>
      <div className='container'>
        <div className='progress-bar'>
          <div className='fill' style={{ width: width+"%" }} />
        </div>
        <div className='steps'>
          <span className={`step ${step >= 1 && 'step-fill'}`}>1</span>
          <span className={`step ${step >= 2 && 'step-fill'}`}>2</span>
          <span className={`step ${step >= 3 && 'step-fill'}`}>3</span>
          <span className={`step ${step >= 4 && 'step-fill'}`}>4</span>
        </div>
      </div>
    </div>
  );
}

export default Progress;
