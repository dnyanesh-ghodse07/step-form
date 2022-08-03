import React from 'react';
import './WelcomeStep.scss';

const welcomeStep = ({setStep}) => {
  return (
    <div className="form-container">
      <div className="text">
        <h3>Welcome! First things first...</h3>
        <p>You can always change them later.</p>
      </div>
      <div className="form">
        <div className="form-item">
          <p>Full Name</p>
          <input type="text" placeholder="Steve Jobs" className="input-item" />
        </div>
        <div className="form-item">
          <p>Display Name</p>
          <input type="text" placeholder="Steve" className="input-item" />
        </div>
        <button className="button" type="button" onClick={() => setStep(2)}>
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default welcomeStep;
