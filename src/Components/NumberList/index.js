import { List, NumberLink, NumberPreview } from "./NumberListItems";

const NumberList = ({ numbers }) => {
  return (
    <List>
      {numbers.map((number) => (
        <NumberPreview key={number.id}>
          <NumberLink to={`/numbers/${number.id}`}>
            <h2> {number.value} </h2>
            <p>
              Monthly price is {number.monthyPrice} {number.currency}
            </p>
          </NumberLink>
        </NumberPreview>
      ))}
    </List>
  );
};

export default NumberList;
