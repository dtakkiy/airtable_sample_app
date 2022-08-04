const table = require('../airtable');
const router = require('express').Router();

router.get('/', (request, response) => {
  const persons = getPerson();
  response.status(200).send(persons);
});

const getPerson = async (context) => {
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

  const results = records.map((record) => {
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

router.post('/', (req, res, next) => {
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
});

const postPerson = async (context) => {
  await table.create(context);
};

const validateName = (name) => {
  if (typeof name === 'undefined') return false;
  if (!name) return false;
  if (name.length > 255) return false;

  return true;
};

const validateAge = (age) => {
  if (typeof age === 'undefined') return false;
  if (!age) return false;
  if (age < 0) return false;
  if (age > 300) return false;

  return true;
};

module.exports = router;
