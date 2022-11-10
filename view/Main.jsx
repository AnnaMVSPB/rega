const React = require('react');
const Layout = require('./Layout');

const Main = ({ title,user }) => {
  return (
    <Layout title={title}>
      <h1>Our main page!!!</h1>
      <h1>{user?.name}</h1>
    </Layout>
  );
};

module.exports = Main;
