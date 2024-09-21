"use client";
import { BarChar } from "@/components/BarChar";
import PieChart from "@/components/PieChart";
import Welcome from "@/components/Welcome";

export default function Dashboard() {
  return (
    <>
      <Welcome page="dashboard" />
      <div className="mt-8 rounded-3xl bg-neutral-100 p-4 flex gap-8 flex-col">
        <PieChart />
        <BarChar />
      </div>
    </>
  );
}
