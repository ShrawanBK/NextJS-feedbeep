"use client";

import React, { useState } from "react";
import Header from "@/widgets/dashboard/header/ui";
import Sidebar from "@/widgets/dashboard/sidebar/ui";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (query: string) => {
    console.log(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onMenuToggle={handleMenuToggle}
        isSidebarOpen={isSidebarOpen}
        onSearch={handleSearch}
      />

      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
