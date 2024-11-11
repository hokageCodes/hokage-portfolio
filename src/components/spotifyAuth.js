// spotifyAuth.js

const CLIENT_ID = '56b203d0756b495eb9b557975947bcfd';  // Replace with your Spotify Client ID
const REDIRECT_URI = 'http://localhost:5173/';  // Your redirect URI (update if needed)
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = ['user-read-playback-state', 'user-read-currently-playing'].join(' ');

export const authorizeSpotify = () => {
  window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
};

export const getAccessTokenFromUrl = () => {
  const hash = window.location.hash;
  if (!hash) return null;

  const token = new URLSearchParams(hash.replace('#', '?')).get('access_token');
  return token;
};

export const clearTokenFromUrl = () => {
  if (window.history.pushState) {
    const newUrl = window.location.origin + window.location.pathname;
    window.history.pushState({ path: newUrl }, '', newUrl); // This removes the token from URL
  }
};

export const fetchNowPlaying = async (token) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error('Error fetching track');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching now playing:', error);
    throw error;
  }
};
