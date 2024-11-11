import { useEffect, useState } from 'react';
import { fetchNowPlaying } from './spotifyAuth';  // Assuming you've already set up spotifyAuth.js

export default function NowPlaying() {
  const [token, setToken] = useState(localStorage.getItem('spotifyToken') || null);
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  // Real-time track updates
  useEffect(() => {
    if (token) {
      const fetchTrack = async () => {
        try {
          const trackData = await fetchNowPlaying(token);
          if (trackData && trackData.item) {
            setTrack(trackData.item);
          } else {
            setTrack(null);  // No music playing
            setError('No music is currently playing.');
          }
        } catch (error) {
          if (error.message.includes('Unauthorized')) {
            setError('Session expired. Please reconnect to Spotify.');
            localStorage.removeItem('spotifyToken');
            setToken(null);
          } else {
            setError(error.message);
          }
        }
      };

      // Fetch initially and then every 10 seconds
      fetchTrack();
      const interval = setInterval(fetchTrack, 10000);

      // Cleanup interval on unmount
      return () => clearInterval(interval);
    }
  }, [token]);

  return (
    <div className="now-playing">
      {error && <p className="error-message">{error}</p>}
      
      {track ? (
        <div className="track-info">
          <img src={track.album.images[0].url} alt="Album cover" className="album-cover" />
          <div className="track-details">
            <p className="track-name">{track.name}</p>
            <p className="artist-name">{track.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </div>
      ) : (
        !error && (
          <div>
            <img src="/assets/no-music-playing.gif" alt="No music playing" className="no-music-gif" />
            <p className="no-music-message">Oops! No music is playing at the moment. 😅</p>
          </div>
        )
      )}
    </div>
  );
}
