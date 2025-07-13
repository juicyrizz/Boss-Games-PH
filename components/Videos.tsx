
import React, { forwardRef } from 'react';
import Section from './Section';
import type { Video } from '../types';

const VideoCard: React.FC<{ video: Video }> = React.memo(({ video }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block group" aria-label={`Watch ${video.title} on YouTube`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative">
          <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-indigo-600/80 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
              </div>
          </div>
        </div>
        <div className="p-5">
          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 bg-red-600/20 text-red-300`}>
            {video.platform}
          </span>
          <h3 className="font-bold text-lg text-white mb-2 h-14 overflow-hidden">{video.title}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{video.views ? `${video.views} views` : ''}</span>
            <span>{video.uploaded}</span>
          </div>
        </div>
      </div>
    </a>
  );
});

const VideoCardSkeleton: React.FC = React.memo(() => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-48 bg-gray-700"></div>
      <div className="p-5">
        <div className="h-4 bg-gray-700 rounded w-1/4 mb-3"></div>
        <div className="h-5 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    </div>
));

interface VideosProps {
    videos: Video[];
    loading: boolean;
    error: string | null;
}

const VideosComponent = forwardRef<HTMLElement, VideosProps>(({ videos, loading, error }, ref) => {
  return (
    <Section id="videos" ref={ref} className="bg-gray-800/40">
      <div className="text-center mb-12 scroll-animate">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Latest Videos</h2>
        <p className="mt-2 text-lg text-gray-400">Highlights, montages, and full gameplays from my YouTube channel.</p>
      </div>
      
      {error && <p className="text-center text-red-400">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          [...Array(6)].map((_, i) => <VideoCardSkeleton key={i} />)
        ) : (
          videos.map((video, index) => (
            <div key={video.id} className="scroll-animate" style={{ transitionDelay: `${150 + index * 100}ms` }}>
              <VideoCard video={video} />
            </div>
          ))
        )}
      </div>
    </Section>
  );
});

export default React.memo(VideosComponent);
