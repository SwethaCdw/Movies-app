"use client";
import SidebarNav from "../components/navigation/SidebarNav";
import Header from "../components/navigation/Header";
import { useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Header onHamburgerClick={() => {}} /> 
      <div className="sidebar-layout" style={{paddingTop: 64}}>
        <SidebarNav open={sidebarOpen} setOpen={setSidebarOpen} />
        <main style={{flex: 1, minHeight: '100vh', paddingTop: 0}}>{children}</main>
      </div>
    </>
  );
}