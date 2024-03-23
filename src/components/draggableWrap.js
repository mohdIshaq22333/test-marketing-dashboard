import React, { useState } from "react";
import DashboardOverview from "@/components/dashboardOverview";
import MarketGoalCard from "@/components/marketGoalCard";
import SalesHistory from "@/components/salesHistory";
import TransactionList from "@/components/transactionList";

function App() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [components, setComponents] = useState([
    { id: 1, name: <DashboardOverview /> },
    { id: 2, name: <MarketGoalCard /> },
    { id: 3, name: <TransactionList /> },
    { id: 4, name: <SalesHistory /> },
  ]);

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
          className="component"
          draggable
          onDragStart={(e) => handleDragStart(e, component.id)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, component.id)}
        >
          {component.name}
        </div>
      ))}
    </div>
  );
}

export default App;
