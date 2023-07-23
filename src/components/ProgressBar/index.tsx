import "./styles.css";

interface ProgressBarProps {
  progress: number;
  step: number;
  numOfQuestions: number;
}

export default function ProgressBar({
  progress,
  step,
  numOfQuestions,
}: ProgressBarProps) {
  return (
    <div className="progress-bar-container">
      <span className="progress-step">
        {step} / {numOfQuestions}
      </span>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
