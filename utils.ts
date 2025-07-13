import type React from 'react';

export const scrollToSection = (ref: React.RefObject<HTMLElement>): void => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export const timeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        const value = Math.floor(interval);
        return `${value} year${value > 1 ? 's' : ''} ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        const value = Math.floor(interval);
        return `${value} month${value > 1 ? 's' : ''} ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        const value = Math.floor(interval);
        return `${value} day${value > 1 ? 's' : ''} ago`;
    }
    interval = seconds / 3600;
     if (interval > 1) {
        const value = Math.floor(interval);
        return `${value} hour${value > 1 ? 's' : ''} ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        const value = Math.floor(interval);
        return `${value} minute${value > 1 ? 's' : ''} ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
};