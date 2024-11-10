// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = '23bebe5b525d414281de79c3b8a4235a';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getNowPlaying() {
  // Fetch the currently playing track
  const response = await fetchWebApi('v1/me/player/currently-playing', 'GET');

  // If nothing is currently playing, return null
  if (!response || !response.is_playing) {
    return null;
  }

  return {
    title: response.item.name,
    artist: response.item.artists.map((artist) => artist.name).join(', '),
    albumImageUrl: response.item.album.images[0]?.url,
    songUrl: response.item.external_urls.spotify,
  };
}

// Use the function to get the current track
getNowPlaying().then((track) => {
  if (track) {
    console.log(`Now playing: ${track.title} by ${track.artist}`);
  } else {
    console.log('No track is currently playing.');
  }
});
