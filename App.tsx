
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Videos from './components/Videos';
import GameList from './components/GameList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import type { Video } from './types';
import { timeAgo } from './utils';

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const pollTimeoutId = useRef<number | null>(null);
  const hasLoadedOnce = useRef(false);

  // Refs for scrolling
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const videosRef = useRef<HTMLElement>(null);
  const gamesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    videos: videosRef,
    games: gamesRef,
    contact: contactRef,
  };

  const fetchVideos = useCallback(async (signal: AbortSignal) => {
    const RSS_FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCNxWiktsb9MOQxuZDdYrtxw';
    const RSS_TO_JSON_API = 'https://api.rss2json.com/v1/api.json?rss_url=';
    
    try {
      const response = await fetch(RSS_TO_JSON_API + encodeURIComponent(RSS_FEED_URL), { signal });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      const text = await response.text();
      if (signal.aborted) return;

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Failed to parse response as JSON.");
      }
      
      if (data.status !== 'ok') {
        throw new Error(`Failed to fetch valid RSS data: ${data.message || 'Unknown API error'}`);
      }
      
      const parsedVideos: Video[] = data.items.map((item: any) => ({
        id: item.guid.split(':').pop() ?? '',
        thumbnailUrl: item.thumbnail,
        title: item.title,
        platform: 'YouTube',
        views: '',
        uploaded: timeAgo(new Date(item.pubDate)),
      }));

      setVideos(currentVideos => {
        if (currentVideos.length > 0 && parsedVideos.length > 0 && currentVideos[0].id === parsedVideos[0].id) {
          return currentVideos;
        }
        return parsedVideos;
      });
      setError(null);
    } catch (err) {
      if ((err as Error).name === 'AbortError') {
        console.log('Fetch aborted.');
        return;
      }
      
      console.error("Failed to fetch or parse RSS feed:", err);
      setVideos(currentVideos => {
        if (currentVideos.length === 0) {
          setError('Could not load latest videos. Please try again later.');
        }
        return currentVideos;
      });
    } finally {
      if (!hasLoadedOnce.current) {
        setLoading(false);
        hasLoadedOnce.current = true;
      }
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const POLLING_INTERVAL_MS = 60000;

    const poll = async () => {
        if (document.visibilityState === 'visible') {
            await fetchVideos(abortController.signal);
        }
        if (!abortController.signal.aborted) {
           pollTimeoutId.current = window.setTimeout(poll, POLLING_INTERVAL_MS);
        }
    };
    
    poll();

    return () => {
      abortController.abort();
      if (pollTimeoutId.current) {
        clearTimeout(pollTimeoutId.current);
      }
    };
  }, [fetchVideos]);


  return (
    <div className="relative">
      <Header sectionRefs={sectionRefs} />
      <main>
        <Hero ref={homeRef} videosRef={videosRef} />
        <About ref={aboutRef} contactRef={contactRef} />
        <Videos ref={videosRef} videos={videos.slice(0, 6)} loading={loading} error={error} />
        <GameList ref={gamesRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default App;