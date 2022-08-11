import express from 'express';

const table = require('../airtable');
const router = require('express').Router();

router.get('/', (request: express.Request, response: express.Response) => {
  const persons = getPerson();
  response.status(200).send(persons);
});

type Fields = {
  fields: {
    name: string;
    age: string;
  };
};

const getPerson = async () => {
  const MAX_RECORD = 10;

  const records = await table
    .select({
      maxRecords: MAX_RECORD,
      sort: [
        { field: 'name', direction: 'asc' },
        { field: 'age', direction: 'asc' },
      ],
    })
    .firstPage();

  const results = records.map((record: Fields) => {
    return {
      name: record.fields.name,
      age: record.fields.age,
    };
  });

  return {
    props: {
      results: results,
    },
  };
};

router.post(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!validateAge(req.body.age)) {
      res.send('invalid input age value.');
    }

    if (!validateName(req.body.name)) {
      res.send('invalid input name value.');
    }

    const data = [
      {
        fields: {
          age: req.body.age,
          name: req.body.name,
        },
      },
    ];

    postPerson(data);
    res.send('success create record.');
  }
);

const postPerson = async (context: Fields[]) => {
  await table.create(context);
};

const validateName = (name: string) => {
  const MAX_LENGTH = 255;

  if (typeof name === 'undefined') return false;
  if (!name) return false;
  if (name.length > MAX_LENGTH) return false;

  return true;
};

const validateAge = (age: string) => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 300;

  if (typeof age === 'undefined') return false;
  if (!age) return false;
  if (Number(age) < MIN_VALUE) return false;
  if (Number(age) > MAX_VALUE) return false;

  return true;
};

module.exports = router;
