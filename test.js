import test from 'ava';
import doy from '.';

test('Throws when args are invalid', t => {
	t.throws(() => {
		doy.dateToDoy();
	}, Error);

	t.throws(() => {
		doy.dateToDoy(32);
	}, Error);

	t.throws(() => {
		doy.dateToDoy(null);
	}, Error);

	t.throws(() => {
		doy.dateToDoy('');
	}, Error);

	t.throws(() => {
		doy.dateToDoy('20123-23-23');
	}, Error);

	t.throws(() => {
		doy.doyToDate(32);
	}, Error);

	t.throws(() => {
		doy.doyToDate(null, 32);
	}, Error);

	t.throws(() => {
		doy.doyToDate();
	}, Error);

	t.throws(() => {
		doy.doyToDate('', '');
	}, Error);
});

test('Should convert date to doy', t => {
	t.deepEqual(doy.dateToDoy('2019-02-01'), {doy: 32, year: 2019});
});

test('Should convert doy to date', t => {
	t.is(doy.doyToDate(2019, 32), '2019-02-01');
});
