import CustomDataTable from "@/components/backoffice/CustomDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import { Heading } from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Heading title='Dashboard Overview' />
      {/* Large cards */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* charts */}
      <DashboardCharts />
      {/* Recent Orders Table */}
      <CustomDataTable />
    </div>
  );
};

export default Dashboard;
