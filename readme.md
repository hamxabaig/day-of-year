# day-of-year [![Build Status](https://travis-ci.com/hamxabaig/day-of-year.svg?branch=master)](https://travis-ci.com/hamxabaig/day-of-year)

> Convert js date string to day of year &amp; vice versa :tada:


## Install

```
$ npm install date2doy
```


## Usage

```js
const doy = require('date2doy');

doy.dateToDoy('2019-02-01');
//=> {doy: 32, year: 2019}

doy.doyToDate(2019, 32);
//=> '2019-02-01'
```


## API

### doy.dateToDoy(date)

#### date

Type: `string`

Should be along the format of: `yyyy-mm-dd`

### doy.doyToDate(year, doy)

#### year

Type: `number`

#### doy

Type: `number`


## License

MIT © Made with ❤️ & ☕️ [Hamza Baig](http://hamxabaig.github.io)
