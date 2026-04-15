import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = (ContainerRef) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (ContainerRef?.current) {
      ContainerRef.current.scrollTop = 0;
    }
  }, [pathname]);
};

export default useScrollToTop;
