import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function GrammarPage() {
  return (
    <Layout>
      <Link to="/grammar/test">찰리와 영어 문법 페이지</Link>
    </Layout>
  );
}
