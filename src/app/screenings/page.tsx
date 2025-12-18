"use client";
import React, { useEffect, useState } from 'react';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchScreenings();
  }, []);

  useEffect(() => {
    if (screenings.length === 0 && !error) {
      setLoading(true);
    }
  }, [screenings, error]);

  //Hint: Promise never resolves! The condition is never true
  async function fetchScreenings() {
    try {
      setLoading(true);
      setError(null);
      
      const data = await new Promise<Screening[]>((resolve, reject) => {
        setTimeout(() => {
          if (screenings.length > 0) {
            resolve(mockScreenings);
          } else {
            console.log('Fetching screenings...');
          }
        }, 1000);
      });
      
      setScreenings(data);
    } catch (err) {
      setError('Failed to load screenings');
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="cinema-container cinema-section">
        <h1 className="cinema-title">Screenings</h1>
        <div className="error-message" style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="cinema-container cinema-section">
      <h1 className="cinema-title">Screenings</h1>
      
      {loading ? (
        <div className="loading-container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '200px',
          flexDirection: 'column'
        }}>
          <div className="loading-spinner" style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #646cff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }}></div>
          <p style={{ color: 'var(--text-secondary)' }}>Loading screenings...</p>
        </div>
      ) : (
        <div className="cinema-card-list">
          {screenings.map((screening) => (
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
      )}
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
