import NumberList from "../NumberList";
import useFetch from "./../../useFetch";

const Home = () => {
  const { data: numbers, isPending, error } = useFetch(
    "http://localhost:8000/numbers"
  );
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {numbers && <NumberList numbers={numbers}></NumberList>}
    </div>
  );
};

export default Home;
