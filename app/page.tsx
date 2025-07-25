"use client";

import { HomeView } from "@/views/home";
import { DashboardLayout } from "@/widgets/dashboard";

export default function HomePage() {
  return (
    <DashboardLayout>
      <HomeView />
    </DashboardLayout>
  );
}
