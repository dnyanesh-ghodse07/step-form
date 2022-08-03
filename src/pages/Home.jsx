import { useState } from "react";
import Progress from "../components/Progress/Progress";
import WelcomeStep from "../components/Steps/WelcomeStep/WelcomeStep";
import Workspace from "../components/Steps/Workspace/Workspace";
import ChooseFor from "../components/Steps/ChooseFor/ChooseFor";
import Launch from "../components/Steps/Launch/Launch";
import "./Home.scss";

function Home() {
  const [step, setStep] = useState(1);

  const displayStep = () => {
    if (step === 1) {
      return <WelcomeStep setStep={setStep}/>;
    } else if (step === 2) {
      return <Workspace setStep={setStep} />;
    } else if (step === 3) {
      return <ChooseFor setStep={setStep} />;
    } else {
      return <Launch />;
    }
  };
  return (
    <div>
      <Progress step={step} />
      {displayStep()}
    </div>
  );
}

export default Home;
