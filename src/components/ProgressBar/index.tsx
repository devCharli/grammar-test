export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="progress-bar-container ">
      <div className="progress-bar " style={{ width: `${progress}%` }}></div>
    </div>
  );
}
