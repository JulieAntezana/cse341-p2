const routes = require('express').Router();
const recipe = require('./recipe');
const flower = require('./flower');

routes.use('/', require('./swagger'));
routes.use('/recipe', recipe);
routes.use('/flower', flower);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://julieantezana.github.io/julie-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;