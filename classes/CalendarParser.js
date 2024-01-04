import MonthParser from "./MonthParser.js"

class CalendarParser {
	constructor(data) {
    this.$ = data
    this.monthsElements = this.$(".calendar-list__item")
    this.months = []
  }

  parse() {
    Array.from(this.monthsElements).forEach((month) => {
      const mp = new MonthParser(this.$, month)
      const monthData = mp.parse()
      this.months.push(monthData)
    })
    return this.months
  }
}

export default CalendarParser
