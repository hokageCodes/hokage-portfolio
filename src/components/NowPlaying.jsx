import { useEffect, useState } from 'react';
import { fetchNowPlaying } from './spotifyAuth'; // Assuming this fetches a public track without user tokens

export default function NowPlaying() {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const trackData = await fetchNowPlaying(); // Adjust this to fetch a public track if available
        if (trackData && trackData.item) {
          setTrack(trackData.item);
        } else {
          setTrack(null);  // No music playing
        }
      } catch (error) {
        setError('Failed to fetch currently playing track.', error);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 10000);

    return () => clearInterval(interval);
  }, []);

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
          <div style={{ width: '100%', height: '0', paddingBottom: '100%', position: 'relative' }}>
            <iframe 
              src="https://giphy.com/embed/bGgsc5mWoryfgKBx1u" 
              width="100%" 
              height="100%" 
              style={{ position: 'absolute' }} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
            <p className="no-music-message">Oops! No music is playing at the moment. 😅</p>
          </div>
        )
      )}
    </div>
  );
}
