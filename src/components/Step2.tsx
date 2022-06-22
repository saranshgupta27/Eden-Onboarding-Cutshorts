import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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
  filledInput: { background: "#f9fafc", width: "140px" },
  optionalText: { color: "#626874", fontWeight: "300" },
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

function Step2({ onSubmit }: { onSubmit: () => void }) {
  const classes = useStyles();

  return (
    <div className="flex flex-col items-center mt-7 md:mt-10">
      <h1 className="text-3xl font-bold text-center">
        Let's set up a home for all your work
      </h1>
      <h2
        className={clsx(
          classes.subheading,
          "text-1xl font-bold mt-2 mb-4 text-center"
        )}
      >
        You can always create another workspace later
      </h2>

      <div className={clsx(classes.formContainer, "flex flex-col gap-0.5")}>
        <label className={classes.label} htmlFor="w-name">
          Workspace Name
        </label>
        <input
          className={clsx("mb-1", classes.input)}
          id="w-name"
          type="text"
          placeholder="Eden"
        />
        <label className={classes.label} htmlFor="w-url">
          Workspace URL <span className={classes.optionalText}>(optional)</span>
        </label>
        <div className="flex">
          <input
            className={clsx("mb-2", classes.input, classes.filledInput)}
            id="w-url"
            type="text"
            placeholder="www.eden.com/"
          />
          <input
            className={clsx("mb-2", classes.input)}
            type="text"
            placeholder="Example"
          />
        </div>

        <button className={classes.button} onClick={onSubmit}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default Step2;
