import { Heading } from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Heading title='Dashboard Overview' />
      {/* Large cards */}
      <LargeCards />
      {/* Small cards */}
      {/* charts */}
      {/* Recent Orders Table */}
    </div>
  );
};

export default Dashboard;
