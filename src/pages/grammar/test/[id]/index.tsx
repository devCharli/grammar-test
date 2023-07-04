import "./styles.css";
import { quizzes } from "../../../../data/data";
import { useParams } from "react-router-dom";
import Quiz from "../../../../components/Test";

export default function TestPage() {
  const { id } = useParams();

  if (id) {
    return <Quiz questions={quizzes[id as keyof typeof quizzes]} />;
  } else {
    return <div>No quiz</div>;
  }
}
