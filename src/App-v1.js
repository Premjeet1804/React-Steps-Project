import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Jonas" });

  // const step = 1;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handlenext() {
    if (step < 3) setStep((s) => s + 1);

    // setTest({ name: "Fred" });
    //Bad Practice
    //test.name = "fred";
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {step}: {messages[step - 1]}
            {/*  {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlenext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
