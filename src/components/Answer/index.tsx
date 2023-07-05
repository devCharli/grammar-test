import { Question } from "../Test";
import styles from "./styles.module.css";
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
    <div>
      <h2>
        Your score is {score}/{Math.min(numOfQuestions, numOfQuestions)}
      </h2>
      <div className={styles.buttonWrapper}>
        <button className={styles.resetBtn} onClick={resetTest}>
          Reset
        </button>
      </div>
      <div>
        {userAnswers.map((userAnswer) => {
          const question = questions.find(
            (question) => question.id === userAnswer.questionId
          );

          if (!question) return null;
          return (
            <div key={question.id} className="border-b-2 border-slate-200 mb-4">
              <p
                className={
                  userAnswer.answer === question.correct
                    ? styles.correct
                    : styles.wrong
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
