"use client";

import Header from "@/common/Header";
import Sidebar from "@/common/Sidebar";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide layout on login page and home page
  const hideLayout = pathname === "/login" || pathname === "/";

  return (
    <div className="flex h-screen bg-gray-100">
      {!hideLayout && <Sidebar />}

      <div className="flex flex-col flex-1">
        {!hideLayout && <Header />}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
