
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Defines default behavior for scrolling to the top of the page on route change
// This component should be used in the main App component to ensure it runs on every route change

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}