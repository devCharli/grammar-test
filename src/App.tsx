import { Link } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <ul className="mt-9">
        <li>
          <Link to="/grammar/test">Grammar Test Page</Link>
        </li>
      </ul>
    </Layout>
  );
}

export default App;
