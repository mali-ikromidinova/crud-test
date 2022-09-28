import { useHistory, useParams } from "react-router-dom";
import { Item } from "./NumberItemElement";
import useFetch from "./../../useFetch";

const NumberItem = () => {
  const { id } = useParams();
  const { data: number, error, isPending } = useFetch(
    "http://localhost:8000/numbers/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/numbers/" + number.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <Item>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {number && (
        <article>
          <h2>{number.value}</h2>
          <p>
            Monthly price is {number.monthyPrice} {number.currency}
          </p>
          <p>
            Setup price is
            {number.setupPrice}
            {number.currency}
          </p>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </Item>
  );
};

export default NumberItem;
