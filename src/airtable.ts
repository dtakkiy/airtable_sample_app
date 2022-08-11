require('dotenv').config();
const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY as string,
}).base(process.env.AIRTABLE_BASE_ID as string);

const table = base(process.env.AIRTABLE_TABLE_NAME as string);

module.exports = table;
