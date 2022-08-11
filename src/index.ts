const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use('/persons/', require('./routes/persons.ts'));

app.listen(3000, () => {
  console.log('listening on port 3000.');
});
