import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import Stepper from "../../components/Stepper";
import Step1 from "../../components/Step1";
import Step2 from "../../components/Step2";
import Step3 from "../../components/Step3";
import Step4 from "../../components/Step4";

const useStyles = createUseStyles((theme) => ({
  logo: {
    height: "42px",
  },
  container: {
    marginTop: "100px",
    padding: "0 200px",
  },
}));

const renderSteps = (
  step: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (step) {
    case 2:
      return <Step2 onSubmit={() => setCurrentStep(3)} />;
    case 3:
      return <Step3 onSubmit={() => setCurrentStep(4)} />;
    case 4:
      return <Step4 onSubmit={() => alert("Registration Successful")} />;
    default:
      return <Step1 onSubmit={() => setCurrentStep(2)} />;
  }
};

function Onboarding() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={clsx("flex flex-col items-center", classes.container)}>
      <div className={"flex items-end gap-1"}>
        <img src="/logo.svg" alt="logo" className={classes.logo} />
        <p className="text-3xl font-semibold">Eden</p>
      </div>
      <Stepper
        stepsCount={4}
        currentStep={currentStep}
        onClick={(step: number) => setCurrentStep(step)}
      />
      {renderSteps(currentStep, setCurrentStep)}
    </div>
  );
}

export default Onboarding;
