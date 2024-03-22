import DashboardOverview from "@/components/dashboardOverview";
import MarketGoalCard from "@/components/marketGoalCard";
import SalesHistory from "@/components/salesHistory";
import TransactionList from "@/components/transactionList";

export default function Home() {
  return (
    <main className="mt-8">
      <div className="flex gap-8">
        <div className="w-[70%]">
          <DashboardOverview />
        </div>
        <div className="flex-1">
          <MarketGoalCard />
        </div>
      </div>
      <div className="flex gap-8 mt-10 max-h-[400px]">
        <div className="w-[70%]">
          <TransactionList />
        </div>
        <div className="flex-1">
          <SalesHistory />
        </div>
      </div>
    </main>
  );
}

// font family
// shades
