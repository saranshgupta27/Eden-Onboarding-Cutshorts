import clsx from "clsx";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  subheading: {
    color: "var(--secondary)",
  },
  label: {
    color: "var(--secondary)",
    fontSize: "16px",
    fontWeight: "500",
  },
  card: {
    padding: "16px",
    border: "1px solid #edeef2",
    width: "180px",
    textAlign: "left",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "var(--primary)",
    },
    "@media (max-width: 960px)": {
      width: "auto",
      maxWidth: "100%",
    },
  },
  icon: { height: "30px" },
  selectedCard: {
    borderColor: "var(--primary)",
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
});

const cardsData = [
  {
    id: 1,
    image: "/assets/human.svg",
    imageSelected: "/assets/humanSelected.svg",
    heading: "For myself",
    subtext: "Write better.Think more clearly. Stay organized.",
  },
  {
    id: 2,
    image: "/assets/humans.svg",
    imageSelected: "/assets/humansSelected.svg",
    heading: "With my team",
    subtext: "Wikis, docs,tasks & projects, all in one place",
  },
];

function Step3({ onSubmit }: { onSubmit: () => void }) {
  const classes = useStyles();
  const [selectedCard, setSelectedCard] = useState<null | number>(null);
  return (
    <div className="flex flex-col items-center mt-7 md:mt-10">
      <h1 className="text-3xl font-bold text-center">
        How are you planning to use Eden?
      </h1>
      <h2
        className={clsx(classes.subheading, "text-1xl  mt-2 mb-4 text-center")}
      >
        We'll streamline your setup experience accordingly.
      </h2>

      <div className={clsx(classes.formContainer, "flex flex-col gap-0.5")}>
        <div className="flex flex-col gap-2 justify-between md-justify-start mb-4 md:flex-row">
          {cardsData.map((item) => (
            <button
              key={item.id}
              className={clsx(
                classes.card,
                { [classes.selectedCard]: selectedCard === item.id },
                "flex flex-col gap-1"
              )}
              onClick={() => setSelectedCard(item.id)}
            >
              <img
                className={classes.icon}
                src={selectedCard === item.id ? item.imageSelected : item.image}
                alt="human"
              />
              <p className="font-bold">{item.heading}</p>
              <p className="text-1xl">{item.subtext}</p>
            </button>
          ))}
        </div>

        <button className={classes.button} onClick={onSubmit}>
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default Step3;
