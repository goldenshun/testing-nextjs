const Cookie = () => (
  <div>
      The cookie has been set. You are welcome.
  </div>
);

Cookie.getInitialProps = ({ res }) => {
  if (res) {
    res.cookie('TOKEN', '12345', {
      path: '/',
      httpOnly: true,
    });
  }
  return {};
};

export default Cookie;
