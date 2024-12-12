import React, { useState } from "react";
import "./Part3.css";

const GymQAItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="qa-container" className="container">
      <div className="gym-question" onClick={toggleVisibility}>
        {question}
      </div>
      {isVisible && <div className="answer">{answer}</div>}
    </div>
  );
};

function Part3() {
  const gymQAs = [
    {
      question: "What equipment is available at your gym?",
      answer:
        "We offer a wide range of equipment, including cardio machines, free weights, strength training machines, and functional fitness equipment.",
    },
    {
      question: "Do you offer group fitness classes?",
      answer:
        "Yes, we offer various group fitness classes like yoga, Zumba, HIIT, spin, and strength training.",
    },
    {
      question: "What are your membership options?",
      answer:
        "We offer flexible membership options to suit your needs. Please visit our website or app for details.",
    },
    {
      question: "Do you have a mobile app?",
      answer:
        "Yes, we have a mobile app for iOS and Android to manage your membership and book classes.",
    },
  ];

  return (
    <div className="gym-qa-section">
      <h2>Frequently Asked Questions</h2>
      {gymQAs.map((qa, index) => (
        <GymQAItem key={index} question={qa.question} answer={qa.answer} />
      ))}
    </div>
  );
}

export default Part3;
