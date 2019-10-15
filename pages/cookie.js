const Cookie = () => (
  <div>
      The cookie has been set. You are welcome.
  </div>
);

Cookie.getInitialProps = ({ req, res }) => {
  if (res) {
    res.cookie('TOKEN', '12345', {
      path: '/',
      httpOnly: true,
      secure: !req.host.includes('localhost'),
      sameSite: 'Lax',
    });
  }
  return {};
};

export default Cookie;
