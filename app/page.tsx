"use client";

import { HomeView } from "@/views/home/ui/home";
import DashboardLayout from "@/widgets/dashboard";

export default function HomePage() {
  return (
    <DashboardLayout>
      <HomeView />
    </DashboardLayout>
  );
}
