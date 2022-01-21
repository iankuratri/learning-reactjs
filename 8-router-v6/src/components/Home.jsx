import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home Page</div>
      {/* to replace history use -> navigate("order-summary", { replace: true }) */}
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </>
  );
};

export default Home;
