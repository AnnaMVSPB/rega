require('dotenv').config();
require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');


const mainRoute = require('./Routes/mainRoute');
const todoRoute = require('./Routes/todoRoute');
const authRoute = require('./Routes/authRoute');

const app = express();

const port = process.env.PORT || 3000;

serverConfig(app);

app.use('/', mainRoute);
app.use('/todos', todoRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Я пытался..., а порт? ${port}`);
});
