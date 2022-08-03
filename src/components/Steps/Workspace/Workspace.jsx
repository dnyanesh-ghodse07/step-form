import React from "react";
import "./Workspace.scss";

function Workspace({setStep}) {
  return (
    <div className='workspace-form-container'>
      <div className='text'>
        <h3>Let's set up a home for all your work</h3>
        <p>You can always create another workspace later.</p>
      </div>
      <div className='workspace-form'>
        <div className='form-item'>
          <p className="label">Workspace Name</p>
          <input type='text' placeholder='Eden' className='input-item' />
        </div>
        <div className='form-item'>
          <p className="label">Workspace URL <span style={{color: 'lightgray'}}>(optional)</span></p>
          <div className="site-input">
            <span>www.eden.com/</span>
            <input type='url' placeholder='Example' className='input' />
          </div>
        </div>
        <button className='button' type='button' onClick={() => setStep(3)}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default Workspace;
