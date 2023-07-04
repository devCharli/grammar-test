import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-lime-700 font-bold underline">
        Grammar app!
      </h1>
      <ul className="mt-9">
        {/* <li>
          <Link to="/grammar">Grammar</Link>
        </li> */}
        <li>
          <Link to="/grammar/test">Grammar Test Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
