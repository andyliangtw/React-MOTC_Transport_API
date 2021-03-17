import { useEffect } from 'react';
import { isBottom } from '../tools';

export function useOnScrollToBottom(handler) {
  useEffect(() => {
    const listener = () => {
      if (isBottom()) {
        handler();
      }
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [handler]);
}
