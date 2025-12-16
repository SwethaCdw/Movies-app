
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Screenings", href: "/screenings" },
];

export default function SidebarNav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const pathname = usePathname();
  return (
    <nav className="sidebar-nav" style={{
      transform: open ? "translateX(0)" : "translateX(-110%)",
      transition: "transform 0.2s cubic-bezier(.4,0,.2,1)",
      position: "fixed",
      left: 0,
      top: "50px",
      bottom: 0,
      height: "100vh",
      zIndex: 99
    }}>
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                pathname === item.href ? "sidebar-link active" : "sidebar-link"
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
