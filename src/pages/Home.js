import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigatehandler() {
    navigate('/produts');
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        go to
        <Link to="/products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigatehandler}>Navigate</button>
      </p>
    </>
  );
}

export default Home;
