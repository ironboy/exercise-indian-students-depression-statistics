import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js'

addMdToPage(`
  # The first 10 students
  **Note:** Only the first four columns so far...
`);

let someStudents = await dbQuery('SELECT * FROM results LIMIT 10');

tableFromData({ data: someStudents });