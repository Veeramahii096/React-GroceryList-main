import { useEffect, useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Items from "./components/Items";
import { ToastContainer,toast } from "react-toastify";

function App() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function addItems(itemName) {
    const newItem = {
      name: itemName,
      id: new Date().getMilliseconds(),
      completed: false,
    };

    setItems([...items, newItem]);
    toast.success("items added to the list ")
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    toast.warning("item is removed")
  };

  return (
    <section>
      <ToastContainer position="top-center" />
      <Navbar toggleTheme={toggleTheme} />
      <div className="grocery-list">
        <Title text="grocery list" />
        <Form addItems={addItems} />
        <Items deleteItem={deleteItem} items={items} />
      </div>
    </section>
  );
}

export default App;
