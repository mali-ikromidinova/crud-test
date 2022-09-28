import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CreateBtn,
  CreateInput,
  CreateItem,
  CreateLabel,
  CreateSelect,
  CreateTitle,
} from "./CreateComponents";

const Create = () => {
  const [number, setNumber] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [setupPrice, setSetupPrice] = useState("3.40");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { number, monthlyPrice, setupPrice };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <CreateItem>
      <CreateTitle>Add a New Item</CreateTitle>
      <form onSubmit={handleSubmit}>
        <CreateLabel>Phone number:</CreateLabel>
        <CreateInput
          type="text"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <CreateLabel>Monthly Price:</CreateLabel>
        <CreateInput
          type="text"
          required
          value={monthlyPrice}
          onChange={(e) => setMonthlyPrice(e.target.value)}
        />
        <CreateLabel>Setup Price</CreateLabel>
        <CreateSelect
          value={setupPrice}
          onChange={(e) => setSetupPrice(e.target.value)}
        >
          <option value="3.40">3.40</option>
          <option value="2.45">2.45</option>
          <option value="5.05">5.05</option>
        </CreateSelect>
        {!isPending && <CreateBtn>Add New Item</CreateBtn>}
        {isPending && <CreateBtn disabled>Adding New Item...</CreateBtn>}
      </form>
    </CreateItem>
  );
};

export default Create;
