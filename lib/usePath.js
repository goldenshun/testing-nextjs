import { useEffect, useState } from 'react';

const usePath = () => {
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return path;
};

export default usePath;
