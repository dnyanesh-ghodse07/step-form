import React from "react";
import "./Launch.scss";

function Launch() {
  return (
    <div className='launch-container'>
      <div className='icon'>
        <i class='fa-solid fa-circle-check'></i>
      </div>
      <div className='greeting'>
        <div className='text'>
          <h3>Congratulations, Eren!</h3>
          <p>You have completed onboarding, you can start using the Eden!</p>
        </div>
        <button className='button' type='button'>
          Launch Eden
        </button>
      </div>
    </div>
  );
}

export default Launch;
