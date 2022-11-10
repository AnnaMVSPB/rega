const router = require('express').Router();
const Main = require('../view/Main.jsx');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'Э, не мороси' });
});

module.exports = router;
