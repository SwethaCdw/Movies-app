"use client";
import React from "react";

export default function Header({ onHamburgerClick }: { onHamburgerClick: () => void }) {
  return (
    <header className="app-header">
      <button
        className="header-hamburger"
        aria-label="Open navigation"
        onClick={onHamburgerClick}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="5" width="24" height="2.5" rx="1.25" fill="#18122B" />
          <rect y="11" width="24" height="2.5" rx="1.25" fill="#18122B" />
          <rect y="17" width="24" height="2.5" rx="1.25" fill="#18122B" />
        </svg>
      </button>
      <span className="app-title">Movies App</span>
      <span className="profile-icon" aria-label="Profile">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" fill="#A259FF" />
          <ellipse cx="12" cy="18" rx="7" ry="4" fill="#E94560" />
        </svg>
      </span>
    </header>
  );
}
