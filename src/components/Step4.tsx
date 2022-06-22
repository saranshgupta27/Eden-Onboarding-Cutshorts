import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  subheading: {
    color: "gray",
  },
  roundTick: {
    background: "#674de6",
    width: "60px",
    height: "60px",
    borderRadius: "100%",
    color: "white",
    fontSize: "25px",
  },
  button: {
    background: "#674de6",
    color: "white",
    padding: "16px 0",
    borderRadius: "4px",
    fontSize: "14px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "360px",
  },
});

function Step4({ onSubmit }: { onSubmit: () => void }) {
  const classes = useStyles();

  return (
    <div className="flex flex-col items-center mt-7 md:mt-10">
      <div
        className={clsx(
          "flex items-center justify-center mb-6",
          classes.roundTick
        )}
      >
        &#10003;
      </div>
      <h1 className="text-3xl font-bold text-center">Congratulations, Eren!</h1>
      <h2
        className={clsx(
          classes.subheading,
          "text-1xl font-bold mt-2 mb-4 text-center"
        )}
      >
        You have completed onboarding, you can start using the Eden!
      </h2>

      <div className={clsx(classes.formContainer, "flex flex-col gap-0.5")}>
        <button className={classes.button} onClick={onSubmit}>
          Launch Eden
        </button>
      </div>
    </div>
  );
}

export default Step4;
