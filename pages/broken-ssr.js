import usePath from '../lib/usePath';

const BrokenSsr = () => {
  const path = usePath();
  if (!path) return null;

  return (
    <div data-testid="content">
      {`The path is ${path}`}
    </div>
  );
};

export default BrokenSsr;
