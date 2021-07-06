import React, { useState, useEffect } from "react";

import { SortableList } from "./components/sortableContainer";
import arrayMove from "array-move";
import "./index.css";

const getRandomValue = () => {
  return Math.floor(Math.random() * 400) + 1;
};

let Data = [1, 2, 3, 4, 5, 6].map((val, index) => ({
  title: "Item " + index,
  index: index,
  id: val,
  imageSrc: `https://picsum.photos/180/180?random=${getRandomValue()}`,
}));

const useLocalStorageState = (key, items = Data) => {
  const retrievedObject = localStorage.getItem(key);
  const [state, setState] = useState(
    () => JSON.parse(retrievedObject) || items
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const [state, setState] = useLocalStorageState("cardItems");

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState(arrayMove(state, oldIndex, newIndex));
  };

  return (
    <SortableList
      items={state}
      onSortEnd={onSortEnd}
      axis="xy"
      helperClass="SortableHelper"
    />
  );
};

export default App;
