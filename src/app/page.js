"use client";
import DashboardOverview from "@/components/dashboardOverview";
import MarketGoalCard from "@/components/marketGoalCard";
import SalesHistory from "@/components/salesHistory";
import TransactionList from "@/components/transactionList";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const componentsList = [
  {
    com: DashboardOverview,
    id: 1,
    className: "w-[70%]",
  },
  {
    com: MarketGoalCard,
    id: 2,
    className: "flex-1 max-w-[350px]",
  },
  {
    com: TransactionList,
    id: 3,
    className: "w-[70%]  max-h-[400px]",
  },
  {
    com: SalesHistory,
    id: 4,
    className: "flex-1 max-w-[350px]  max-h-[400px]",
  },
];

export default function Home() {
  const [list, setList] = useState(componentsList);

  return (
    <main className="mt-8">
      <ReactSortable
        filter=".addImageButtonContainer"
        dragClass="sortableDrag"
        list={list}
        setList={setList}
        animation="200"
        easing="ease-out"
        className="flex gap-8 flex-wrap"
      >
        {list.map((val) => (
          <div className={val.className} key={val.id}>
            <val.com />
          </div>
        ))}
      </ReactSortable>
    </main>
  );
}
