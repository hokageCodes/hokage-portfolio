import { useEffect, useState } from 'react';
import { authorizeSpotify, getAccessTokenFromUrl, clearTokenFromUrl, fetchNowPlaying } from './spotifyAuth';

export default function NowPlaying() {
  const [token, setToken] = useState(localStorage.getItem('spotifyToken') || null);
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  // Check for token in URL and store in localStorage
  useEffect(() => {
    const accessToken = getAccessTokenFromUrl();
    if (accessToken) {
      localStorage.setItem('spotifyToken', accessToken);
      setToken(accessToken);
      clearTokenFromUrl();
    }
  }, []);

  // Real-time track updates
  useEffect(() => {
    if (token) {
      const fetchTrack = async () => {
        try {
          const trackData = await fetchNowPlaying(token);
          if (trackData && trackData.item) {
            setTrack(trackData.item);
          } else {
            setError('No track is currently playing or there was an issue with permissions.');
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
      {!token && (
        <button onClick={authorizeSpotify} className="btn-spotify-auth">
          Connect to Spotify
        </button>
      )}
      
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
        token && !error && <p>Checking for currently playing track...</p>
      )}
    </div>
  );
}
