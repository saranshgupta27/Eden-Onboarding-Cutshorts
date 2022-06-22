import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  subheading: {
    color: "gray",
  },
  label: {
    color: "#3b414d",
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    padding: "8px",
    border: "1px solid #edeef2",
    borderRadius: "4px",
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
}));

function Step1({ onSubmit }: { onSubmit: () => void }) {
  const classes = useStyles();

  return (
    <div className="flex flex-col items-center mt-7 md:mt-10">
      <h1 className="text-3xl font-bold text-center">
        Welcome! First things first...
      </h1>
      <h2
        className={clsx(
          classes.subheading,
          "text-1xl font-bold mt-2 mb-4 text-center"
        )}
      >
        You can always change them later.
      </h2>

      <div className={clsx(classes.formContainer, "flex flex-col gap-0.5")}>
        <label className={classes.label} htmlFor="name">
          Full Name
        </label>
        <input
          className={clsx("mb-1", classes.input)}
          id="name"
          type="text"
          placeholder="Steve Jobs"
        />
        <label className={classes.label} htmlFor="d-name">
          Display Name
        </label>
        <input
          className={clsx("mb-2", classes.input)}
          id="d-name"
          type="text"
          placeholder="Steve"
        />
        <button className={classes.button} onClick={onSubmit}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default Step1;
