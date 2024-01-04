import needle from 'needle'
import * as cheerio from "cheerio"
import fs from 'fs'
import CalendarParser from './classes/CalendarParser.js';

const link = "https://rabota.by/calendar";
const metaData = ["days", "weekends", "working", "hours"];

async function getCalendar(forceYear) {
	return new Promise((resolve, reject) => {
    needle.get(link, function(err, res) {
      const $ = cheerio.load(res.body)
      const cp = new CalendarParser($)
      resolve(cp.parse())
    })
	});
}


getCalendar()
.then((result) => {
  fs.writeFileSync("result.json", JSON.stringify(result, null, 2))
  console.log('Job is done')
})