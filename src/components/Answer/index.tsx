import { Question } from "../Test";
import "./styles.css";
interface AnswerProps {
  numOfQuestions: number;
  score: number;
  questions: Question[];
  resetTest: () => void;
  userAnswers: { questionId: number; answer: string }[];
}

export default function Answer({
  score,
  questions,
  resetTest,
  numOfQuestions,
  userAnswers,
}: AnswerProps) {
  return (
    <div className="p-5">
      <h2 className="text-center text-2xl">
        Your score is {score}/{Math.min(numOfQuestions, numOfQuestions)}
      </h2>
      <div className="flex justify-center">
        <button
          className={`button-option text-lg reset-btn`}
          onClick={resetTest}
        >
          Reset
        </button>
      </div>
      <div className="p-6">
        {userAnswers.map((userAnswer) => {
          const question = questions.find(
            (question) => question.id === userAnswer.questionId
          );

          if (!question) return null;
          return (
            <div
              key={question.id}
              className="border-b-2 border-slate-200 last:border-b-0 mb-4"
            >
              <p
                className={
                  userAnswer.answer === question.correct
                    ? `answer-correct`
                    : `answer-wrong`
                }
              >
                {question.text}
              </p>
              <p>Your answer: {userAnswer.answer}</p>
              <p>Correct answer: {question.correct}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
