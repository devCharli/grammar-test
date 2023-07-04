import { Link } from "react-router-dom";
import { quizzes } from "../../../data/data";

export default function GrammarTest() {
  const days = Object.keys(quizzes);

  return (
    <div className="flex flex-col items-start">
      {days.map((day) => (
        <Link key={day} to={`/grammar/test/${day}`} className="py-2">
          {day.replace(/-/g, " ")}
        </Link>
      ))}
    </div>
  );
}
