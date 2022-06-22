import clsx from "clsx";
import React, { useState } from "react";
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
  card: {
    padding: "16px",
    border: "1px solid #edeef2",
    maxWidth: "180px",
    textAlign: "left",
    borderRadius: "8px",
  },
  icon: { height: "30px" },
  selectedCard: {
    borderColor: "#674de6",
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
    maxWidth: "400px",
  },
});

const cardsData = [
  {
    id: 1,
    image: "/human.svg",
    imageSelected: "/humanSelected.svg",
    heading: "For myself",
    subtext: "Write better.Think more clearly. Stay organized.",
  },
  {
    id: 2,
    image: "/humans.svg",
    imageSelected: "/humansSelected.svg",
    heading: "With my team",
    subtext: "Wikis, docs,tasks & projects, all in one place",
  },
];

function Step3({ onSubmit }: { onSubmit: () => void }) {
  const classes = useStyles();
  const [selectedCard, setSelectedCard] = useState<null | number>(null);
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">How are you planning to use Eden?</h1>
      <h2 className={clsx(classes.subheading, "text-1xl font-bold mt-2 mb-4")}>
        We'll streamline your setup experience accordingly.
      </h2>

      <div className={clsx(classes.formContainer, "flex flex-col gap-0.5")}>
        <div className="flex gap-4 mb-4">
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
