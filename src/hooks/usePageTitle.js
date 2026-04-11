import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | Melodiq` : 'Melodiq — Discover Music';
  }, [title]);
};

export default usePageTitle;
