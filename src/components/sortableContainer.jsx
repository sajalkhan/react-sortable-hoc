import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import "../index.css";
const SortableItem = SortableElement(({ item }) => (
  <div className="item">
    <div className="inner-item">
      <img src={item.imageSrc} alt="img" />
    </div>
  </div>
));

export const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="container">
      {items.map((item, index) => (
        <SortableItem key={`${item.id}`} index={index} item={item} />
      ))}
    </div>
  );
});
