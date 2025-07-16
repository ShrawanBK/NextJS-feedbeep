"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/config/tanstack-query/query-client";

export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
