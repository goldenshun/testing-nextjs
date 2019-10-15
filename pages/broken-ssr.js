import { useEffect, useState } from 'react';

const BrokenSsr = () => {
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  if (!path) return null; // path will be null on the server

  return (
    <div data-testid="content">
      {`The path is ${path}`}
    </div>
  );
};

export default BrokenSsr;
