const React = require('react');
const Navbar = require('./Navbar');

const Layout = ({ title, children }) => {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link href="/styles/style.css" rel="stylesheet"></link>
        <script defer src="/js/client.js"></script>
        <title>{title}</title>
      </head>
   <Navbar/>
      <body>{children}</body>
    </html>
  );
};

module.exports = Layout;
