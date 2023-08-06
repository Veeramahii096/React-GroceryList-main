import { useState } from "react";

const SingleItem = ({ item, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="item">
      <p style={isChecked ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </p>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <button onClick={() => deleteItem(item.id)} className="btn">
        delete
      </button>
    </div>
  );
};

export default SingleItem;
