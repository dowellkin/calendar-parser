import DayParser from "./DayParser.js";
const metaData = ["days", "weekends", "working", "hours"]

class MonthParser {
	constructor($, monthObject) {
    this.$ = $
    this.month = monthObject
    this.monthData = {
			meta: {},
			days: {},
		}

    this.fillMeta()
  }

  fillMeta() {
    metaData.forEach((key, index) => {
			this.monthData.meta[key] = this.$(this.month)
				.find(
					`.calendar-list__overview-item:nth-child(${
						index + 1
					}) .calendar-list__overview-value`
				)
				.text()
		})

		this.monthData.meta.title = this.$(this.month)
			.find(".calendar-list__item-title")
			.text()
  }

  parse() {
    const days = this.$(this.month).find(
			".calendar-list__numbers__item:not(.calendar-list__numbers__item_other)"
		)

    Array.from(days).forEach((day) => {
      const dp = new DayParser(this.$, day)
      const [n, dayData] = dp.parse()
			this.monthData.days[n] = dayData
		})

    return this.monthData
  }
}

export default MonthParser
