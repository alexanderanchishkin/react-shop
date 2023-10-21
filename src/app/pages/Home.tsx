import {useEffect, useState} from 'react'

const Home = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportStableHeight, setViewportStableHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      setViewportHeight(window.Telegram.WebApp.viewportHeight)
      // @ts-ignore
      setViewportStableHeight(window.Telegram.WebApp.viewportStableHeight)
    }, 300);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return <div>viewportHeight: {viewportHeight}<br />viewportStableHeight: {viewportStableHeight}</div>;
}

export default Home
