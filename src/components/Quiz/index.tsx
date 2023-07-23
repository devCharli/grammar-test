import { useMemo } from "react";
import ProgressBar from "../ProgressBar";
import { Question, SelectAnswer } from "../Test";

interface QuizBoxProps {
  numOfQuestions: number;
  questions: Question[];
  step: number;
  progress: number;
  selectAnswer: SelectAnswer;
  isAnswered: boolean;
  selectedAnswer: string | null;
}

export default function QuizBox({
  step,
  numOfQuestions,
  progress,
  questions,
  selectAnswer,
  selectedAnswer,
  isAnswered,
}: QuizBoxProps) {
  const options = useMemo(() => {
    const optionsArray = [...questions[step - 1].options];
    return optionsArray.sort(() => Math.random() - 0.5);
  }, [questions, step]);

  return (
    <div className="grid grid-col-3 h-screen p-6">
      <ProgressBar
        progress={progress}
        step={step}
        numOfQuestions={numOfQuestions}
      />
      <h2 className="text-xl text-center">{questions[step - 1].text}</h2>
      {step > 0 && step <= numOfQuestions && (
        <div className="">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(questions[step - 1].id, option)}
              className={`button-option text-lg	 ${
                selectedAnswer === option
                  ? option === questions[step - 1].correct
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
