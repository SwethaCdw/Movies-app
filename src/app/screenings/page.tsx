"use client";
import React, { useEffect, useState } from 'react';

// Screening type definition
export type Screening = {
  id: number;
  movieTitle: string;
  auditorium: string;
  time: string;
  status: string;
};

const mockScreenings: Screening[] = [
  { id: 1, movieTitle: 'The Neon Night', auditorium: 'Auditorium 1', time: '7:00 PM', status: 'Now Playing' },
  { id: 2, movieTitle: 'Gold Rush', auditorium: 'Auditorium 2', time: '8:30 PM', status: 'Upcoming' },
  { id: 3, movieTitle: 'Purple Dreams', auditorium: 'Auditorium 3', time: '9:15 PM', status: 'Upcoming' },
];

export default function ScreeningsPage() {
  const [screenings, setScreenings] = useState<Screening[]>([]);

  useEffect(() => {
    fetchScreenings();
  }, []);

  async function fetchScreenings() {
    // Simulate async fetch
    const data = await new Promise<Screening[]>(resolve => setTimeout(() => resolve(mockScreenings), 200));
    setScreenings(data);
  }

  // Intentional UI bug: duplicate key (use index instead of id)
  return (
    <div className="cinema-container cinema-section">
      <h1 className="cinema-title">Screenings</h1>
      <div className="cinema-card-list">
        {screenings.map((screening, idx) => (
          <div key={screening.id} className="cinema-card">
            <div>
              <div className="cinema-card-title">{screening.movieTitle}</div>
              <div className="cinema-card-sub">{screening.auditorium}</div>
              <div className="cinema-card-sub" style={{ color: 'var(--text-secondary)' }}>{screening.time}</div>
            </div>
            <div className="cinema-card-status">{screening.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
