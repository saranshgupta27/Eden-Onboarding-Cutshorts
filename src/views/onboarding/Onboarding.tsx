import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import Stepper from "../../components/Stepper";

const useStyles = createUseStyles((theme) => ({
  logo: {
    height: "40px",
  },
  container: {
    marginTop: "100px",
    padding: "0 200px",
  },
}));

function Onboarding() {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={clsx("flex flex-col items-center", classes.container)}>
      <div className={"flex items-end gap-2"}>
        <img src="/logo.png" alt="logo" className={classes.logo} />
        <p className="text-2xl font-semibold">Eden</p>
      </div>
      <Stepper
        stepsCount={4}
        currentStep={currentStep}
        onClick={(step: number) => setCurrentStep(step)}
      />
    </div>
  );
}

export default Onboarding;
