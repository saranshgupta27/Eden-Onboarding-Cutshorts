import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  subheading: {
    color: "var(--secondary)",
  },
  label: {
    color: "var(--secondary)",
    fontSize: "16px",
    fontWeight: "500",
  },
  input: {
    padding: "10px 16px",
    border: "1px solid var(--lightGray)",
    borderRadius: "4px",
  },

  button: {
    background: "var(--primary)",
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
        className={clsx(classes.subheading, "text-1xl  mt-2 mb-4 text-center")}
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
