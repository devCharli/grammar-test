import { Question } from "../Test";
import styles from "./styles.module.css";
interface AnswerProps {
  numOfQuestions: number;
  score: number;
  questions: Question[];
  resetTest: () => void;
}

export default function Answer({
  score,
  questions,
  resetTest,
  numOfQuestions,
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
        {questions
          .slice(0, Math.min(numOfQuestions, numOfQuestions))
          .map((question) => (
            <div key={question.id} className="border-b-2 border-slate-200 mb-4">
              <p>{question.text}</p>
              <p>정답: {question.correct}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
