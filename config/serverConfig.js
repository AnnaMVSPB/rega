const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const ssr = require('../middleware/ssr');
const { cookiesCleaner, resLocals, getUser } = require('../middleware/auth');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(ssr);
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cookiesCleaner);
  app.use(resLocals);
  app.use(getUser);
};

module.exports = serverConfig;
