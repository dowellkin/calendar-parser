class DayParser{
  constructor($, day) {
    this.$ = $
    this.day = day
  }

  parse() {
    const tempDay = {
			isWeekend: this.day.attribs.class.includes(
				"calendar-list__numbers__item_day-off"
			),
			isShort: this.day.attribs.class.includes(
				"calendar-list__numbers__item_shortened"
			),
			reason: "",
		}

		if (tempDay.isWeekend || tempDay.isShort) {
			const reasonWrapper = this.$(this.day).find(".calendar-hint")
			tempDay.reason = reasonWrapper ? this.$(reasonWrapper).text().trim() : ""
		}

		const n = parseInt(this.$(this.day).text().trim())
    return [n, tempDay]
  }
}

export default DayParser;