import React, { useState } from "react";

const QuizApp = () => {
  const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["G", "Go", "Au", "Ag"],
      answer: "Au",
    },
    {
      question: "Which country is home to the Great Wall?",
      options: ["India", "China", "Egypt", "Mexico"],
      answer: "China",
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
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        color: "#333",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          padding: "40px 30px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        {!showScore ? (
          <>
            <h2 style={{ color: "#333" }}>
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              {questions[currentQuestion].question}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              {questions[currentQuestion].options.map((option, i) => (
                <label
                  key={i}
                  style={{
                    background:
                      selectedOption === option ? "#ffd6a5" : "#fff",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    transition: "0.3s",
                  }}
                >
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={{ marginRight: "10px" }}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              style={{
                background: "#f77f00",
                color: "#fff",
                border: "none",
                padding: "10px 22px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </>
        ) : (
          <>
            <h2 style={{ color: "#333", marginBottom: "10px" }}>
              🎉 Quiz Completed!
            </h2>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              Your Score: <b>{score}</b> / {questions.length}
            </p>
            <button
              onClick={handleRestart}
              style={{
                marginTop: "20px",
                background: "#00b4d8",
                color: "#fff",
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
      <footer
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#444",
          opacity: 0.8,
        }}
      >
        Made with ❤️ for Learners
      </footer>
    </div>
  );
};

export default QuizApp;
