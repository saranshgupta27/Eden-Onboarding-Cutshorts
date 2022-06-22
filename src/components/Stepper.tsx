import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  round: {
    height: "35px",
    width: "35px",
    borderRadius: "100%",
    border: "1px solid gray",
    background: "white",
  },
  selected: { background: "#674de6", color: "white", borderColor: "#674de" },
  line: {
    position: "absolute",
    width: "300%",
    top: 18,
    left: 30,
    zIndex: -1,
    height: "2px",
    background: "gray",
    "@media (max-width: 960px)": {
      width: "200%",
    },
  },
  line2: {
    display: "none",
    position: "absolute",
    width: "50%",
    top: 0,
    left: 0,
    zIndex: -1,
    height: "2px",
    background: "#674de6",
  },
  showLine2: {
    display: "block",
  },
  completedStep: { background: "#674de6" },
});

function Stepper({
  stepsCount,
  currentStep,
  onClick,
}: {
  stepsCount: number;
  currentStep: number;
  onClick: (step: number) => void;
}) {
  const classes = useStyles();

  const [stepsData, setStepsData] = useState<
    {
      value: number;
      isCurrentStep: boolean;
    }[]
  >([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < stepsCount; i += 1) {
      arr.push({ value: i + 1, isCurrentStep: i + 1 === currentStep });
    }
    setStepsData(arr);
  }, [currentStep, stepsCount]);

  return (
    <div className="flex gap-7 md:gap-10 items-center mt-8">
      {stepsData.map((item) => (
        <button
          key={item.value}
          className="relative"
          onClick={() => onClick(item.value)}
        >
          <div
            className={clsx("flex items-center justify-center", classes.round, {
              [classes.selected]: item.value <= currentStep,
            })}
          >
            {item.value}
          </div>
          {item.value !== stepsCount && (
            <div
              className={clsx(classes.line, {
                [classes.completedStep]: item.value < currentStep,
              })}
            >
              <div
                className={clsx(classes.line2, {
                  [classes.showLine2]: item.isCurrentStep,
                })}
              />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default Stepper;
