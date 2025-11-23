import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborginis",
      ],
      answer: "Hypertext Markup Language",
    },
    {
      question: "In which year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      answer: "1995",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      answer: "Facebook",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === "") return alert("Please select an answer!");
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          padding: "30px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        {!showScore ? (
          <>
            <h2>
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p style={{ fontSize: "18px" }}>{questions[currentQuestion].question}</p>
            <div style={{ marginTop: "20px" }}>
              {questions[currentQuestion].options.map((option, i) => (
                <div key={i} style={{ margin: "10px 0" }}>
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      style={{ marginRight: "10px" }}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#2575fc",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </>
        ) : (
          <>
            <h2>Quiz Completed!</h2>
            <p>
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={handleRestart}
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#2575fc",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Restart Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
