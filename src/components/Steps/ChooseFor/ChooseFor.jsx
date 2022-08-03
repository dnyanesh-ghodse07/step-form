import React, { useEffect, useState } from "react";
import "./ChooseFor.scss";

function ChooseFor({ setStep }) {
  const [selectCardSelf, setSelectCardSelf] = useState(false);
  const [selectCardTeam, setSelectCardTeam] = useState(false);

  useEffect(() => {
    if (selectCardSelf) {
      setSelectCardTeam(false);
    }
    if (selectCardTeam) {
      setSelectCardSelf(false);
    }
  }, [selectCardSelf, selectCardTeam]);

  return (
    <div className='choose-for-container'>
      <div className='text'>
        <h3>How are you planning to use Eden?</h3>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className='choose-cards'>
        <div className='choose-card'>
          <div
            className={`self ${selectCardSelf && "selected"}`}
            onClick={() => setSelectCardSelf(!selectCardSelf)}
          >
            <div className='icon'>
              <i class='fa-solid fa-user'></i>
            </div>
            <div className='title'>For myself</div>
            <div className='text'>
              Write better, Think more clearly, Stay organised
            </div>
          </div>
          <div
            className={`team ${selectCardTeam && "selected"}`}
            onClick={() => setSelectCardTeam(!selectCardTeam)}
          >
            <div className='icon'>
              <i class='fa-solid fa-users'></i>
            </div>
            <div className='title'>With my team</div>
            <div className='text'>
              Wikis, docs, tasks & projects, all in one place.
            </div>
          </div>
        </div>
        <button className='button' type='button' onClick={() => setStep(4)}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default ChooseFor;
