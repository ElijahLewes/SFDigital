import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Layout route that scrolls to the top when a page mounts.
// App.jsx keys <Routes> by pathname, so every navigation mounts a fresh copy
// together with the new page. The old page therefore stays where it was
// until it is swapped out, with no scroll jump during the transition.
function OnPageLoad() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Outlet />;
}

export default OnPageLoad;
