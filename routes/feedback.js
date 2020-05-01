const express = require('express');
const router = express.Router();
const reqlib = require('app-root-path').require;
const logger = reqlib('logger');

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var recentDays = 5;

var schema = {
  "type": "array",
  "minItems": 10,
  "maxItems": 20,
  "items": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "faker": "name.findName"
        },
        "price": {
          "type": "integer",
          "minimum": 100,
          "maximum": 999
        },
        "age": {
            "type": "integer",
            "minimum": 16,
            "maximum": 52
          },
      },
      "required": [
        "name",
        "price", 
        "age",
       ]
      }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
         logger.debug(util.inspect(sample, 
             {showHidden: false, depth: null}));

       res.render('feedback', 
          { projects:  sample });
  });


});

module.exports = router;