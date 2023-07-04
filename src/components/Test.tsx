import { useState } from "react";
import Answer from "./Answer";
import QuizBox from "./Quiz";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correct: string;
}

interface QuizProps {
  questions: Question[];
}

export interface Answer {
  questionId: number;
  answer: string;
}

export interface SelectAnswer {
  (questionId: number, answer: string): void;
}

export default function Quiz({ questions }: QuizProps) {
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const numOfQuestions = questions.length;

  interface SelectAnswer {
    (questionId: number, answer: string): void;
  }

  const selectAnswer: SelectAnswer = (questionId, answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[questionId - 1].correct) {
      setScore(score + 1);
    }
    setProgress((step / questions.length) * 100);
    setTimeout(() => {
      if (step < questions.length) {
        setStep(step + 1);
        setIsAnswered(false);
      } else {
        setStep(step + 1);
      }
      setSelectedAnswer(null);
    }, 300);
  };

  const resetTest = () => {
    setStep(1);
    setScore(0);
    setProgress(0);
    setIsAnswered(false);
  };

  return (
    <div className="h-screen px-5 max-w-sm">
      {step >= 0 && step <= numOfQuestions ? (
        <QuizBox
          step={step}
          numOfQuestions={numOfQuestions}
          progress={progress}
          questions={questions}
          selectAnswer={selectAnswer}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
        />
      ) : (
        <Answer
          numOfQuestions={numOfQuestions}
          resetTest={resetTest}
          score={score}
          questions={questions}
        />
      )}
    </div>
  );
}