import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("please enter some name");
      return;
    }
    addItems(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newItem}
        type="text"
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        name="name"
        autoComplete="off"
      />
      <button type="submit" className="btn">
        add item
      </button>
    </form>
  );
};

export default Form;
