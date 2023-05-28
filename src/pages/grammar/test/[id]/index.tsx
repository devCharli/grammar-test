import { useState } from "react";
import Button from "@mui/material/Button";
import "./styles.css";
export default function BeVerb() {
  const [step, setStep] = useState(0);
  const [numQuestions, setNumQuestions] = useState(10);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [progress, setProgress] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const startTest = (num: number) => {
    setNumQuestions(num);
    setStep(1);
  };

  interface Answer {
    questionId: number;
    answer: string;
  }

  interface Question {
    id: number;
    text: string;
    options: string[];
    correct: string;
  }

  const questions: Question[] = [
    {
      id: 1,
      text: "You ___ a student.",
      options: ["is", "are"],
      correct: "are",
    },
    { id: 2, text: "He ___ a teacher.", options: ["is", "are"], correct: "is" },
    {
      id: 3,
      text: "They ___ friends.",
      options: ["is", "are"],
      correct: "are",
    },
    { id: 4, text: "I ___ happy.", options: ["am", "are"], correct: "am" },
    { id: 5, text: "She ___ a doctor.", options: ["is", "are"], correct: "is" },
    {
      id: 6,
      text: "We ___ excited about the trip.",
      options: ["is", "are"],
      correct: "are",
    },
    {
      id: 7,
      text: "It ___ raining outside.",
      options: ["is", "are"],
      correct: "is",
    },
    {
      id: 8,
      text: "The books ___ on the table.",
      options: ["is", "are"],
      correct: "are",
    },
    {
      id: 9,
      text: "The cat ___ sleeping.",
      options: ["is", "are"],
      correct: "is",
    },
    {
      id: 10,
      text: "You and I ___ friends.",
      options: ["is", "are"],
      correct: "are",
    },
  ];

  interface SelectAnswer {
    (questionId: number, answer: string): void;
  }

  const selectAnswer: SelectAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, { questionId, answer }]);
    setProgress((step / Math.min(questions.length, numQuestions)) * 100);
    setTimeout(() => {
      if (step < Math.min(questions.length, numQuestions)) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    }, 1000);
  };
  console.log(answers);
  const resetTest = () => {
    setStep(0);
    setAnswers([]);
    setProgress(0);
  };

  interface Question {
    id: number;
    correct: string;
  }

  const score = answers.filter((ans: Answer) => {
    const question = questions.find((q: Question) => q.id === ans.questionId);
    return question ? ans.answer === question.correct : false;
  }).length;

  return (
    <div>
      {step === 0 && (
        <div className="flex flex-col">
          <Button variant="outlined" onClick={() => startTest(10)}>
            Start 10 Questions
          </Button>
          <Button variant="outlined" onClick={() => startTest(20)}>
            Start 20 Questions
          </Button>
          <Button variant="outlined" onClick={() => startTest(30)}>
            Start 30 Questions
          </Button>
        </div>
      )}

      {step > 0 && step <= Math.min(questions.length, numQuestions) && (
        <>
          <h3>{questions[step - 1].text}</h3>
          <div className="buttons">
            {questions[step - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(questions[step - 1].id, option)}
                className={`button-option ${
                  answers.some(
                    (ans) =>
                      ans.questionId === questions[step - 1].id &&
                      ans.answer === option
                  )
                    ? option === questions[step - 1].correct
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step >= 1 && step <= numQuestions && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {step === Math.min(questions.length, numQuestions) + 1 && (
        <div>
          <h2>
            Your score is {score}/{Math.min(questions.length, numQuestions)}
          </h2>
          <button onClick={resetTest}>Reset</button>
          <div className="ad-container">
            {/* Paste your AdSense ad code here */}
          </div>
          <button onClick={() => setShowAnswer(!showAnswer)}>Review</button>

          {showAnswer && (
            <div>
              {questions
                .slice(0, Math.min(questions.length, numQuestions))
                .map((question) => (
                  <div key={question.id}>
                    <p>{question.text}</p>
                    <p>Correct answer: {question.correct}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
