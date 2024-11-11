import { useEffect, useState } from 'react';
import { authorizeSpotify, getAccessTokenFromUrl, clearTokenFromUrl, fetchNowPlaying } from './spotifyAuth';

const YOUR_SPOTIFY_ID = '040304d3155a426d';  // Replace with your actual Spotify user ID

export default function NowPlaying() {
  const [token, setToken] = useState(localStorage.getItem('spotifyToken') || null);
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  // Check if the user is you and get token from URL if available
  useEffect(() => {
    const urlToken = getAccessTokenFromUrl();
    if (urlToken) {
      setToken(urlToken);
      localStorage.setItem('spotifyToken', urlToken);
      clearTokenFromUrl();
    } else if (!token && YOUR_SPOTIFY_ID === '040304d3155a426d') {  // Only you trigger auth
      authorizeSpotify();
    }
  }, [token]);

  // Fetch your currently playing track if token is available
  useEffect(() => {
    const fetchTrack = async () => {
      if (token) {
        try {
          const trackData = await fetchNowPlaying(token);
          if (trackData && trackData.item) {
            setTrack(trackData.item);
          } else {
            setTrack(null);
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
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 10000);

    return () => clearInterval(interval);
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
            <p className="no-music-message">Oops! No music is playing at the moment.😅</p>
          </div>
        )
      )}
    </div>
  );
}



  