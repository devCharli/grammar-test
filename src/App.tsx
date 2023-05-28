import { Link } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import AddReactionIcon from "@mui/icons-material/AddReaction";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-lime-700 font-bold underline">
        Grammar app!
      </h1>
      <ul>
        <li>
          <Link to="/grammar">Grammar</Link>
        </li>
        <li>
          <Link to="/grammar/test">Grammar Test Page</Link>
        </li>
        <li>
          <Link to="/grammar/test/1">Grammar Test 1</Link>
        </li>
      </ul>
      <Button variant="contained">
        <Link to="/grammar/test/be-verb">Be verb</Link>
      </Button>
      <AddReactionIcon />
    </div>
  );
}

export default App;
