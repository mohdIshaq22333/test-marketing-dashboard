"use client";
import React, { useState } from "react";
import DashboardOverview from "@/components/dashboardOverview";
import MarketGoalCard from "@/components/marketGoalCard";
import SalesHistory from "@/components/salesHistory";
import TransactionList from "@/components/transactionList";

const compList = [
  {
    id: 1,
    className: "w-[70%]",

    comp: DashboardOverview,
  },
  {
    id: 2,
    className: "flex-1 max-w-[350px]",

    comp: MarketGoalCard,
  },
  {
    id: 3,
    className: "w-[70%]  max-h-[400px]",

    comp: TransactionList,
  },
  {
    id: 4,
    className: "flex-1  max-h-[400px] max-w-[350px]",

    comp: SalesHistory,
  },
];
function DraggableWrap() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [components, setComponents] = useState(compList);

  console.count("rednering");
  const handleDragStart = (e, id) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, id) => {
    const indexDraggedItem = components.findIndex(
      (item) => item.id === draggedItem
    );
    const indexTargetItem = components.findIndex((item) => item.id === id);
    const newComponents = [...components];
    const draggedComponent = newComponents[indexDraggedItem];
    newComponents.splice(indexDraggedItem, 1);
    newComponents.splice(indexTargetItem, 0, draggedComponent);
    setComponents(newComponents);
  };

  return (
    <div className="flex gap-8 flex-wrap">
      {components.map((component) => (
        <div
          key={component.id}
          className={component.className}
          draggable
          onDragStart={(e) => handleDragStart(e, component.id)}
          onDrag={(e) => handleDragOver(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, component.id)}
        >
          <component.comp />
        </div>
      ))}
    </div>
  );
}

export default DraggableWrap;
