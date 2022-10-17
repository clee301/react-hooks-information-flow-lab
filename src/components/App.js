import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
import Filter from "./Filter"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [childrenMode, setChildrenMode] = useState(true);


  function onDarkModeClick(newChildMode) {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setChildrenMode((newChildMode) => !newChildMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={childrenMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
