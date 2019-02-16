'use strict';
const ow = require('ow');

const doyToDate = (year, doy) => {
	ow(year, ow.number);
	ow(doy, ow.number);

	const date = new Date(year, 0);
	const calcDate = new Date(date.setDate(doy));
	const month = calcDate.getMonth() + 1;
	const day = calcDate.getDate();
	const appendZero = num => {
		return num < 10 ? ('0' + num) : num;
	};

	return `${calcDate.getFullYear()}-${appendZero(month)}-${appendZero(day)}`;
};

const dateToDoy = date => {
	ow(date, ow.string.length(10));

	date = new Date(date);
	const isLeapYear = () => {
		const year = date.getFullYear();
		if ((year & 3) !== 0) {
			return false;
		}

		return ((year % 100) !== 0 || (year % 400) === 0);
	};

	const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	const mn = date.getMonth();
	const dn = date.getDate();
	let dayOfYear = dayCount[mn] + dn;

	if (mn > 1 && isLeapYear()) {
		dayOfYear++;
	}

	return {doy: dayOfYear, year: date.getFullYear()};
};

module.exports = {
	dateToDoy, doyToDate
};
