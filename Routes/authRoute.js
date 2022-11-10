const router = require('express').Router();

const Rega = require('../view/Rega');

const { User } = require('../db/models');

router.get('/reg', (req, res) => {
  res.renderComponent(Rega);
});

router.post('/reg', async (req, res) => {
  const { name, password, email } = req.body;
  if (name && password && email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: 'такой чел уже есть' });
    } else {
      const newUser = await User.create({ name, password, email });
      req.session.userId = newUser.id;
      res.status(200).json({ message: 'все ок', url: '/' });
    }
  }
});

module.exports = router;
